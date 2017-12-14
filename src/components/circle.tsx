import * as React from 'react';
import {Coords} from '../store';

export type Props = {
    coords: Coords,
    onClick: () => void
}

export const Circle: React.StatelessComponent<Props> = ({coords, onClick}) => {

    const style = {
        top: coords.top.toString() + '%',
        left: coords.left.toString() + '%'
    };

    return (
        <div 
            className='circle-item'
            style={style}
            onClick={onClick}
        ></div>  
    )
};
