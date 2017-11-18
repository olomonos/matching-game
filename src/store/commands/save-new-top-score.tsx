import {Command} from './command';
import {minBy} from 'lodash';
import {Score, NewTopScore} from '../../store';
// import {getTopScore} from './get-top-score';
import {refreshTopScore} from '../actions';
import {quantityOfTopScores} from '../../constants';

export type SaveNewTopScore = Command;

const deleteScoreFromServer = function(id: Score['id']): Promise<Score['id']> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return (
        fetch(
            `/topScore/${id}`,
            {
                method: 'DELETE',
                headers: headers,
                body: ''
            }
        )
        .then(() => id)
    );
};

const saveScoreToServer = function(score: NewTopScore): Promise<Score> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    return (
        fetch(
            '/topScore',
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(score)
            }
        )
        .then(res => res.json())
    );
};

export function saveNewTopScore(): SaveNewTopScore { 
    return (dispatch, getState) => {
        const {topScore, currentName, currentScore} = getState();
        let deleteScore: Promise<Score['id']> | undefined;

        if (topScore.length == quantityOfTopScores) {
            const minPoints = minBy(topScore, 'points');
            if (minPoints !== undefined) {
                deleteScore = deleteScoreFromServer(minPoints.id);
            }  
        }

        Promise
            .all<Score, Score['id'] | undefined>([
                saveScoreToServer({
                    name: currentName,
                    points: currentScore
                }),
                deleteScore
            ])
            .then(([score, id]) => dispatch(refreshTopScore(score, id)));
    };
};
