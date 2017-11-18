import * as React from 'react';
import NewTopScoreForm from '../containers/new-top-score-form';
import {Link} from 'react-router-dom';

export type Props = {
    isNewTopScore: boolean
}

export const GameOver: React.StatelessComponent<Props> = ({isNewTopScore}) => {
    
    return (
        <div className='game-over'>
            <h3>Game Over</h3>
            {isNewTopScore ?
                <NewTopScoreForm /> : 
                <div className='new-top-score-form' >
                <h1>Ololo</h1>
                </div>
            }
            {/* <a className="waves-effect waves-light btn">
                <i className="material-icons left">menu</i>
                to the menu
            </a> */}
            <Link to="/menu"
                className='waves-effect waves-light btn'
            >
                <i className="material-icons left">menu</i>
                to the menu
            </Link>       
        </div>
    );
};