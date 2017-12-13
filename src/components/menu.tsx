import * as React from 'react';
import {Store} from '../store';
import {Link} from 'react-router-dom';

export type Props = {
    gameOver: Store['gameOver'],
    isLocal: Store['isLocal'],
    isPending: Store['isPending'],
    onNewGame: () => void,
    onResumeGame: () => void,
    onStorageToggle: React.ChangeEventHandler<HTMLInputElement>
}

export const Menu: React.StatelessComponent<Props> = ({
    gameOver, 
    isLocal,
    isPending,
    onNewGame, 
    onResumeGame,
    onStorageToggle
}) => {
    return (
        <div className="menu-box">
            <div className="switch">
                <label>
                    Local Score
                    <input 
                        type="checkbox" 
                        checked={!isLocal}
                        disabled={isPending}
                        onChange={onStorageToggle} 
                    />
                    <span className="lever"></span>
                    Global Score
                </label>
            </div>
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
        </div>
    );
};