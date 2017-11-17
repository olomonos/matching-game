import {connect} from 'react-redux';
import {GameOver, Props} from '../components/game-over';
import {Store} from '../store';

export type StateProps = Pick<Props, 'topScore' | 'currentScore'>;

export default connect<StateProps>(
    (state: Store) => ({
        topScore: state.topScore,
        currentScore: state.currentScore
    }),
    dispatch => ({
    })
)(
    GameOver
)