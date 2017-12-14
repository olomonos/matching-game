import * as React from 'react';
import {Store} from '../store';

export type Props = {
    currentScore: Store['currentScore'],
    timeLeft: Store['timeLeft']
}

export const CurrentScore: React.StatelessComponent<Props> = ({
    currentScore, 
    timeLeft
}) => (
    <div className='current-score'>
        <div className='card-panel teal current-points'>
            <span className='white-text'>
                {'Score: '}
                {currentScore}
            </span>
        </div>
        <div className='card-panel teal current-time'>
            <span className='white-text'>
                {'Time: '}
                {timeLeft}
            </span>
        </div>
    </div>  
);
