import {connect} from 'react-redux';
import {Menu, Props} from '../components/menu';
import {Store} from '../store';
import {newGame, resumeGame, setIsLocal} from '../store/actions';
import {getTopScore} from '../store/commands/get-top-score';

export type StateProps = Pick<Props, 'gameOver' | 'isLocal'>;

export type DispatchProps = Pick<Props, 'onNewGame' | 'onResumeGame' | 'onStorageToggle'>;

export default connect<StateProps, DispatchProps>(
    (state: Store) => ({
        gameOver: state.gameOver,
        isLocal: state.isLocal
    }),
    dispatch => ({
        onNewGame() {
            dispatch(newGame());
        },
        onResumeGame() {
            dispatch(resumeGame());
        },
        onStorageToggle(e) {
            dispatch(setIsLocal(e.currentTarget.checked));
            dispatch(getTopScore());
        }
    })
)(
    Menu   
)
