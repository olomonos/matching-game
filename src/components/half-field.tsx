import * as React from 'react';
import InactiveCircle from '../containers/inactive-circle';
import {Store} from '../store/types';

export type Props = {
    currentCircles: Store['currentCircles']
}

export const HalfField: React.StatelessComponent<Props> = ({currentCircles}) => {
        
    let circles = [];
    circles = currentCircles.map((coords, i) => {
        return <InactiveCircle coords={coords} key={i} />
    });

    return (
        <div className='half-field' id='half-field-1'>
            {circles}
        </div>
    );
};