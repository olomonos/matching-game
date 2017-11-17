import {Score} from '../types';

export type SetCurrentScore = {type: 'SetCurrentScore', changes: Partial<Score>};

export function setCurrentScore(changes: Partial<Score>): SetCurrentScore {
    return {type: 'SetCurrentScore', changes};
};