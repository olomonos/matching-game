import {Reducer} from './reducer';
import {Store} from '../types';

export const topScore: Reducer<Store['topScore']> = (state = null, action) => {
    switch (action.type) {
        case 'SetTopScore': {
            return action.topScore;
        }
        default: {
            return state;
        }
    }
};