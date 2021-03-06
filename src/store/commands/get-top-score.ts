import {Command} from './command';
import {Score} from '../types';
import {setTopScore, setIsPending} from '../actions';

export type GetTopScore = Command;

function getScoreFromServer(): Promise<Score[]> {
    return fetch('/topScore')
        .then(res => res.status == 200 ?
            res.json() as Promise<Score[]> :
            Promise.reject(res)
        );
}

export function getTopScore(): GetTopScore { 
    return (dispatch, getState) => {
        const {isLocal} = getState();
        
        if (isLocal) {
            // Check if localStorage exists
            const localTopScore = localStorage.getItem("topScore");
            if (localTopScore !== null) {
                dispatch(setTopScore(JSON.parse(localTopScore)));
            } else {
                dispatch(setTopScore([]));
            }
        } else {
            dispatch(setIsPending(true));
            getScoreFromServer()
                .then(topScore => dispatch(setTopScore(topScore)))
                .catch(() => alert('There is no server available.'))
                .then(() => dispatch(setIsPending(false)));
        }
    }
};
