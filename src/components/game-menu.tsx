import * as React from 'react';
import {Link} from 'react-router-dom';
import {Store} from '../store';

export type Props = {
    gameOver: Store['gameOver']
} & React.HTMLAttributes<HTMLDivElement>

export const GameMenu: React.StatelessComponent<Props> = ({gameOver, ...rest}) => (
    <div {...rest}>
        {gameOver ? null :
        <Link to="/menu"
            className="waves-effect waves-light btn menu-item"
            >pause
        </Link>
        }
    </div>
);