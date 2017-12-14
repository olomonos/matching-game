import {randomCoords} from './random-coords';
import {Coords} from '../store';

export const setOfRandomCoords = function (quantity: number) : Coords[] {
    let set: Coords[] = [];
    for (let i = 0; i < quantity; i++) {
        let coords = randomCoords(300, 600, 50, 50, 2);
        // let coords = randomCoords(100, 100, 10, 10, 2);        
        set.push(coords);
    }
    return set;
};