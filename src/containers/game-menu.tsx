import {connect} from 'react-redux';
import {GameMenu, Props} from '../components/game-menu';
import {Store} from '../store';

export type StateProps = Pick<Props, 'gameOver'>;

export default connect<StateProps>(
    (state: Store) => ({
        gameOver: state.gameOver
    }),
    dispatch => ({
    })
)(
    GameMenu
)