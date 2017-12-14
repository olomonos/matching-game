import {Score} from '../types';

export type SetTopScore = {type: 'SetTopScore', topScore: Score[]};

export function setTopScore(topScore: Score[]): SetTopScore {
    return {type: 'SetTopScore', topScore};
};