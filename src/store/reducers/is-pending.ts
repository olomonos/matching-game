import {Reducer} from './reducer';
import {Store} from '../types';

export const isPending: Reducer<Store['isPending']> = (state = false, action) => {
    switch (action.type) {
        case 'SetIsPending': {
            return action.isPending;
        }
        default: {
            return state;
        }
    }
};
