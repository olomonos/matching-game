import * as React from 'react';
import {Coords} from '../store';

export type Props = {
    coords: Coords
}

export const InactiveCircle: React.StatelessComponent<Props> = ({coords}) => {

    const style = {
        top: coords.top,
        left: coords.left
    };

    return (
        <div 
            className='circle-item'
            style={style}
        ></div>  
    )
};