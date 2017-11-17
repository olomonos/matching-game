import * as React from 'react';
import Circle from '../containers/circle';
import OddCircle from '../containers/odd-circle';
import {randomCoords} from '../utils/random-coords';
import {Coords, Store} from '../store/types';

export type Props = {
    currentCircles: Store['currentCircles'],
    gameOver: Store['gameOver']
}

export const HalfFieldOdd: React.StatelessComponent<Props> = ({currentCircles, gameOver}) => {
        
    let circles = [];
    circles = currentCircles.map((coords) => {
        return <Circle coords={coords} />
    });

    let oddCircleCoords: Coords = randomCoords(300, 600, 50, 50, 2);    // args - ???

    return (
        <div className='half-field' id='half-field-2'>
            {circles}
            {gameOver ? 
                null
                : <OddCircle coords={oddCircleCoords} />
            }
        </div>
    );
};