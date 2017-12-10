import {Reducer} from './reducer';
import {Store} from '../types';

export const timeLeft: Reducer<Store['timeLeft']> = (
    state = 0, 
    action
) => {
    switch (action.type) {
        case 'SetTimeLeft': {
            return action.timeLeft;
        }
        default: {
            return state;
        }
    }
};
