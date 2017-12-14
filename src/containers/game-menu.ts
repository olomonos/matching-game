import {connect} from 'react-redux';
import {pauseGame} from '../store/actions';
import {GameMenu, Props} from '../components/game-menu';
import {Store} from '../store';

export type StateProps = Pick<Props, 'gameOver'>;

export type DispatchProps = Pick<Props, 'onPause'>;

export default connect<StateProps, DispatchProps>(
    (state: Store) => ({
        gameOver: state.gameOver
    }),
    dispatch => ({
        onPause() {
            dispatch(pauseGame());
        }
    })
)(
    GameMenu
)