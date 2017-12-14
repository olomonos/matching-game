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
    <div className='current-score card-panel teal'>
        <span className='white-text'>
            <p>
                <strong>Score: </strong>
                {currentScore}
            </p>
            <p>
                <strong>Time: </strong>
                {timeLeft}
            </p>
        </span>
    </div>  
);
