import {Reducer} from './reducer';
import {Store} from '../types';
import {randomCoords} from '../../utils/random-coords';

const initialCircle: Store['oddCircle'] = randomCoords(300, 600, 50, 50, 2);

export const oddCircle: Reducer<Store['oddCircle']> = (state = initialCircle, action) => {
    switch (action.type) {
        case 'NewGame': {
            return randomCoords(300, 600, 50, 50, 2);
        }
        case 'NextRound': {
            return randomCoords(300, 600, 50, 50, 2);
        }
        default: {
            return state;
        }
    }
};
