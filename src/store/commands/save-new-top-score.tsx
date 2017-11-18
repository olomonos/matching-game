import {Command} from './command';
import {Score, NewTopScore} from '../../store';
import {minBy} from 'lodash';
import {getTopScore} from './get-top-score';

export type SaveNewTopScore = Command;

const quantityOfTopScores = 5;

const deleteScoreFromServer = function(id: Score['id']): Promise<Response> {
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
    );
};

const saveScoreToServer = function(score: NewTopScore): Promise<Response> {
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
    );
};

export function saveNewTopScore(): SaveNewTopScore { 
    return (dispatch, getState) => {
        const {topScore, currentName, currentScore} = getState();

        if (topScore.length == quantityOfTopScores) {
            const minPoints = minBy(topScore, 'points');
            if (minPoints !==undefined) {
                    deleteScoreFromServer(minPoints.id);                    
            }  
        }

        saveScoreToServer({
            name: currentName,
            points: currentScore
        });

        getTopScore();      // promiseAll(); ?
    };
};
