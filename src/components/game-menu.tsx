import * as React from 'react';
import {Link} from 'react-router-dom';
import {Store} from '../store';

export type Props = {
    gameOver: Store['gameOver'];
    onPause(): void;
} & React.HTMLAttributes<HTMLDivElement>

export const GameMenu: React.StatelessComponent<Props> = ({gameOver, onPause, ...rest}) => (
    <div {...rest}>
        {gameOver ? null :
            <Link
                to="/menu"
                className="waves-effect waves-light btn menu-item"
                onClick={onPause}
            >
                pause
            </Link>
        }
    </div>
);