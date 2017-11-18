import {Reducer} from './reducer';
import {Store} from '../types';

export const gameOver: Reducer<Store['gameOver']> = (state = true, action) => {
    switch (action.type) {
        case 'GameOver': {
            return true;
        }
        case 'NewGame': {
            return false;
        }
        default: {
            return state;
        }
    }
};