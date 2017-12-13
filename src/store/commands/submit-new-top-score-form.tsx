import {Command} from './command';
import {minBy, sortBy} from 'lodash';
import {push} from 'react-router-redux';
import {Score, NewTopScore} from '../../store';
import {refreshTopScore, setTopScore} from '../actions';
import {quantityOfTopScores} from '../../constants';

export type SubmitNewTopScoreForm = Command;

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

export function submitNewTopScoreForm(): SubmitNewTopScoreForm { 
    return (dispatch, getState) => {
        const {currentName, currentScore, isLocal, topScore} = getState();
        
        if (isLocal) {
            let newTopScore = [...topScore];
            if (topScore.length == quantityOfTopScores) {
                let sortedTopScore = sortBy(topScore, 'points');
                if (sortedTopScore[0].points < currentScore) {
                    sortedTopScore[0].name = currentName;
                    sortedTopScore[0].points = currentScore;
                    newTopScore = sortedTopScore;
                }
            } else {
                newTopScore.push({
                    name: currentName,
                    points: currentScore,
                    id: ''
                });
            }
            dispatch(setTopScore(newTopScore));
            localStorage.setItem('topScore', JSON.stringify(topScore));
            dispatch(push('/top-score'));

        } else {
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
                .then(([score, id]) => {
                    dispatch(refreshTopScore(score, id));
                    dispatch(push('/top-score'));
                });
        }
    };
};

// Make separate function "update-top-score";