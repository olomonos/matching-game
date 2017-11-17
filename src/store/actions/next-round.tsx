import {Store} from '../types';

export type NextRound = {type: 'NextRound', newCircles: Store['currentCircles']};

export function nextRound(newCircles: Store['currentCircles']): NextRound {
    return {type: 'NextRound', newCircles};
};