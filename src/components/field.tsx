import * as React from 'react';
import HalfField from '../containers/half-field';
import HalfFieldOdd from '../containers/half-field-odd';
import GameOver from '../containers/game-over';
import {Store} from '../store/types';

export type Props = {
    gameOver: Store['gameOver']
}

export const Field: React.StatelessComponent<Props> = ({gameOver}) => {
        
    return (
        <div className='field'>
                <HalfField />
                <HalfFieldOdd />

            {gameOver ? 
                <div>
                    <div className='faded-colors' />
                    <GameOver />
                </div>
                : null
            }
        </div>
    );
};