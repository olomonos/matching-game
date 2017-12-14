import {connect} from 'react-redux';
import {Menu, Props} from '../components/menu';
import {Store} from '../store/types';
import {newGame, resumeGame} from '../store/actions';

export type StateProps = Pick<Props, 'gameOver'>;

export type DispatchProps = Pick<Props, 'onNewGame' | 'onResumeGame'>;

export default connect<StateProps, DispatchProps>(
    (state: Store) => ({
        gameOver: state.gameOver,
    }),
    dispatch => ({
        onNewGame() {
            dispatch(newGame());
        },
        onResumeGame() {
            dispatch(resumeGame());
        }
    })
)(
    Menu   
)
