import {Reducer} from './reducer';
import {Store} from '../types';

export const isPaused: Reducer<Store['isPaused']> = (state = false, action) => {
    switch (action.type) {
        case 'PauseGame': {
            return true;
        }
        case 'ResumeGame': {
            return false;
        }
        default: {
            return state;
        }
    }
};