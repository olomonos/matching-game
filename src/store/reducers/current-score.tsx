import {Reducer} from './reducer';
import {Store} from '../types';

const initialCurrentScore: Store['currentScore'] = {
    id: '',
    name: '',
    points: 0
}

export const currentScore: Reducer<Store['currentScore']> = (
    state = initialCurrentScore, 
    action
) => {
    switch (action.type) {
        case 'SetCurrentScore': {
            return {...state, ...action.changes};
        }
        default: {
            return state;
        }
    }
};
