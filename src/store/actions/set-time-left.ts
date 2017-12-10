import {Store} from '../types';

export type SetTimeLeft = {type: 'SetTimeLeft', timeLeft: Store['timeLeft']};

export function setTimeLeft(timeLeft: Store['timeLeft']): SetTimeLeft {
    return {type: 'SetTimeLeft', timeLeft};
};