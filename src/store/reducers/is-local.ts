import {Reducer} from './reducer';
import {Store} from '../types';

export const isLocal: Reducer<Store['isLocal']> = (state = true, action) => {
    switch (action.type) {
        case 'SetIsLocal': {
            return !action.isLocal;
        }
        default: {
            return state;
        }
    }
};