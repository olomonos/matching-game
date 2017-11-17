import * as React from 'react';
import Circle from '../containers/circle';
import {Store} from '../store/types';

export type Props = {
    currentCircles: Store['currentCircles']
}

export const HalfField: React.StatelessComponent<Props> = ({currentCircles}) => {
        
    let circles = [];
    circles = currentCircles.map((coords) => {
        return <Circle coords={coords} />
    });

    return (
        <div className='half-field' id='half-field-1'>
            {circles}
        </div>
    );
};