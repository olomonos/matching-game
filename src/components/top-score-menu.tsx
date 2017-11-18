import * as React from 'react';
import {Link} from 'react-router-dom';
// import {Store} from '../store';

export type Props = {
    // gameOver: Store['gameOver']
}

export const TopScoreMenu: React.StatelessComponent<Props> = () => (
    <div>
        <Link to="/menu"
            className="waves-effect waves-light btn"
            >menu
        </Link>
    </div>
);