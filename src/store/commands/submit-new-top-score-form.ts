import {Command} from './command';
import {minBy} from 'lodash';
import {push} from 'react-router-redux';
import * as uuid from 'uuid/v4';
import {Score, NewTopScore} from '../../store';
import {refreshTopScore} from '../actions';
import {quantityOfTopScores} from '../../constants';

export type SubmitNewTopScoreForm = Command;

function deleteScoreFromServer(id: Score['id']): Promise<Score['id']> {
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
}

function saveScoreToServer(score: NewTopScore): Promise<Score> {
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
}

function updateServerScores(
    topScores: Score[],
    score: NewTopScore
): Promise<[Score, Score['id'] | undefined]> {
    let deleteScore: Promise<Score['id']> | undefined;
    
    if (topScores.length == quantityOfTopScores) {
        const minPoints = minBy(topScores, 'points');
        if (minPoints !== undefined) {
            deleteScore = deleteScoreFromServer(minPoints.id);
        }  
    }

    return Promise
        .all<Score, Score['id'] | undefined>([
            saveScoreToServer(score),
            deleteScore
        ])
}

function updateLocalScores(
    topScores: Score[],
    score: NewTopScore
): Promise<[Score, Score['id'] | undefined]> {
    const newScore = {...score, id: uuid()};
    let deletedId: Score['id'] | undefined;

    if (topScores.length == quantityOfTopScores) {

        const minPoints = minBy(topScores, 'points');
        if (minPoints !== undefined) {
            deletedId = minPoints.id;
            topScores.splice(topScores.indexOf(minPoints), 1);
        }
    }

    localStorage.setItem('topScore', JSON.stringify([...topScores, newScore]));

    return Promise.resolve(
        [newScore, deletedId] as [Score, Score['id'] | undefined]
    );
}

export function submitNewTopScoreForm(): SubmitNewTopScoreForm { 
    return (dispatch, getState) => {
        const {currentName, currentScore, isLocal, topScore} = getState();
        const newScore = {name: currentName, points: currentScore};

        (isLocal ?
            updateLocalScores(topScore, newScore) :
            updateServerScores(topScore, newScore)
        ).then(([score, id]) => {
            dispatch(refreshTopScore(score, id));
            dispatch(push('/top-score'));
        });
    };
};
