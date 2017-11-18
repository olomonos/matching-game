import {Reducer} from './reducer';
import {Store} from '../types';

export const currentScore: Reducer<Store['currentScore']> = (
    state = 0, 
    action
) => {
    switch (action.type) {
        case 'NewGame': {
            return 0;
        }
        case 'NextRound': {
            let newScore = state;
            return newScore + 1;
        }
        default: {
            return state;
        }
    }
};
