import * as React from 'react';
import {Link} from 'react-router-dom';
// import {Store} from '../store';

export type Props = {
    // gameOver: Store['gameOver']
} & React.HTMLAttributes<HTMLDivElement>

export const TopScoreMenu: React.StatelessComponent<Props> = (props) => (
    <div {...props}>
        <Link to="/menu"
            className="waves-effect waves-light btn menu-item"
            >menu
        </Link>
    </div>
);