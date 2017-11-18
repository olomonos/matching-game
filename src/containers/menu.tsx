import {connect} from 'react-redux';
import {Menu, Props} from '../components/menu';
import {Store} from '../store';
import {newGame} from '../store/actions';

export type StateProps = Pick<Props, 'gameOver'>;

export type DispatchProps = Pick<Props, 'onNewGame'>;

export default connect<StateProps, DispatchProps>(
    (state: Store) => ({
        gameOver: state.gameOver
    }),
    dispatch => ({
        onNewGame() {
            dispatch(newGame());
        }
    })
)(
    Menu   
)