import * as React from 'react';
import {Link} from 'react-router-dom';
import {Store} from '../store';

export type Props = {
    gameOver: Store['gameOver']
}

export const GameMenu: React.StatelessComponent<Props> = ({gameOver}) => (
    <div>
        {gameOver ? null :
        <Link to="/menu"
            className="waves-effect waves-light btn"
            >pause
        </Link>
        }
    </div>
);