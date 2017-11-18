import * as React from 'react';
import NewTopScoreForm from '../containers/new-top-score-form';
import {Link} from 'react-router-dom';

export type Props = {
    isNewTopScore: boolean
}

export const GameOver: React.StatelessComponent<Props> = ({isNewTopScore}) => {
    
    return (
        <div className='game-over'>
            <Link to="/menu"
                className='waves-effect waves-light btn menu-item'
            >menu
            </Link>       
            {isNewTopScore ?
                <NewTopScoreForm className='new-top-score-form' /> :
                <div className="card-panel teal game-over-panel">
                    <h3 className="white-text center-align">Game Over</h3>
                </div>
            }
        </div>
    );
};