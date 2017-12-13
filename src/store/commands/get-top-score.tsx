import {Command} from './command';
import {Score} from '../types';
import {setTopScore} from '../actions';

export type GetTopScore = Command;

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
            fetch('/topScore')
            .then(res => res.status == 200 ?
                res.json() as Promise<Score[]> :
                Promise.reject(res)
            )
            .then(topScore => dispatch(setTopScore(topScore)))
        }
    }
};
