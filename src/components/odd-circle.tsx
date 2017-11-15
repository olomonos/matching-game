import * as React from 'react';
import {Coords} from '../store';

export type Props = {
    coords: Coords,
    onOddClick: () => void
}

export const OddCircle: React.StatelessComponent<Props> = ({coords, onOddClick}) => {

    const style = {
        top: coords.top,
        left: coords.left
    };

    return (
        <div 
            className='circle-item'
            style={style}
            onClick={onOddClick}
        ></div>  
    )
};