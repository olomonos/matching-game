import {connect} from 'react-redux';
import {Menu, Props} from '../components/menu';
import {Store} from '../store/types';
import {newGame, resumeGame, setIsLocal} from '../store/actions';
import {getTopScore} from '../store/commands/get-top-score';

export type StateProps = Pick<Props, 'gameOver' | 'isLocal' | 'isPending'>;

export type DispatchProps = Pick<Props, 'onNewGame' | 'onResumeGame' | 'onStorageToggle'>;

export default connect<StateProps, DispatchProps>(
    (state: Store) => ({
        gameOver: state.gameOver,
        isLocal: state.isLocal,
        isPending: state.isPending
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
