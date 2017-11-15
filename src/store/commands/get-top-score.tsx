import {Command} from './command';
import {Score} from '../types';
import {setTopScore} from '../actions';

export type GetTopScore = Command;

export function getTopScore(): GetTopScore { 
    return dispatch => fetch('/topScore')
        .then(res => res.status == 200 ?
            res.json() as Promise<Score[]> :
            Promise.reject(res)
        )
        .then(topScore => dispatch(setTopScore(topScore)))
};
