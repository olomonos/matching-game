import * as React from 'react';
import {Store} from '../store';
import {Link} from 'react-router-dom';

export type Props = {
    gameOver: Store['gameOver'],
    onNewGame: () => void,
    onResumeGame: () => void,
}

export const Menu: React.StatelessComponent<Props> = ({
    gameOver, 
    onNewGame, 
    onResumeGame,
}) => {
    return (
        <ul className='menu-items-block'>
            <li>
                {gameOver ? null :
                    <Link to="/game"
                        className="waves-effect waves-light btn menu-item"
                        onClick={onResumeGame}
                        >back to the game
                    </Link>
                }
            </li>
            <li>
                <Link to="/game"
                    className='waves-effect waves-light btn menu-item'
                    onClick={onNewGame}
                    >new game
                </Link>
            </li>
            <li>
                <Link to="/top-score"
                    className="waves-effect waves-light btn menu-item"
                    >top score
                </Link>
            </li>
        </ul>
    );
};