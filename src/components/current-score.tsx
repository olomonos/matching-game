import * as React from 'react';
import {Store} from '../store';

export type Props = {
    currentScore: Store['currentScore']
}

export const CurrentScore: React.StatelessComponent<Props> = ({currentScore}) => (
    <div 
        className='current-score card-panel teal'
    >
        <span className='white-text'>
            <strong>Score: </strong>
            {currentScore}
        </span>
    </div>  
);