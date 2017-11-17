import {Reducer} from './reducer';
import {Store} from '../types';

export const gameOver: Reducer<Store['gameOver']> = (state = false, action) => {
    switch (action.type) {
        case 'GameOver': {
            return true;
        }
        default: {
            return state;
        }
    }
};