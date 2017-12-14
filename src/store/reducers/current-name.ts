import {Reducer} from './reducer';
import {Store} from '../types';

export const currentName: Reducer<Store['currentName']> = (
    state = '', 
    action
) => {
    switch (action.type) {
        case 'NewGame': {
            return '';
        }
        case 'SetCurrentName': {
            return action.name;
        }
        default: {
            return state;
        }
    }
};
