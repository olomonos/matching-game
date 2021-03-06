import {Reducer} from './reducer';
import {Store} from '../types';
import {setOfRandomCoords} from '../../utils/set-of-random-coords';

const initialCircles: Store['currentCircles'] = setOfRandomCoords(4);

export const currentCircles: Reducer<Store['currentCircles']> = (
    state = initialCircles, action
) => {
    switch (action.type) {
        case 'NewGame': {
            return setOfRandomCoords(4);
        }
        case 'NextRound': {
            let newCurrentCircles = [...state, ...setOfRandomCoords(4)];
            return newCurrentCircles;
        }
        default: {
            return state;
        }
    }
};