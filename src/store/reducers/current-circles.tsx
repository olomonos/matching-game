import {Reducer} from './reducer';
import {Store} from '../types';
import {randomCoords} from '../../utils/random-coords';

const initialCircles: Store['currentCircles'] = [
    randomCoords(300, 600, 50, 50, 2),
    randomCoords(300, 600, 50, 50, 2),
    randomCoords(300, 600, 50, 50, 2),
    randomCoords(300, 600, 50, 50, 2)    
];

export const currentCircles: Reducer<Store['currentCircles']> = (
    state = initialCircles, action
) => {
    switch (action.type) {
        // case 'SetTopScore': {
        //     return action.topScore;
        // }
        default: {
            return state;
        }
    }
};