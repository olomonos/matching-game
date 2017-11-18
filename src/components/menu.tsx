import * as React from 'react';
import {Store} from '../store';
import {Link} from 'react-router-dom';

export type Props = {
    gameOver: Store['gameOver'],
    onNewGame: () => void,
}

export const Menu: React.StatelessComponent<Props> = ({gameOver, onNewGame}) => {
    return (
        <div className='menu'>
            {gameOver ? null :
            <Link to="/game"
                className="waves-effect waves-light btn"
                >back to the game
            </Link>
            }
            <Link to="/game"
                className='waves-effect waves-light btn'
                onClick={onNewGame}
                >new game
            </Link>
            <Link to="/top-score"
                className="waves-effect waves-light btn"
                >top score
            </Link>
        </div>
    );
};