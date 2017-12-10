import {connect} from 'react-redux';
import {CurrentScore, Props} from '../components/current-score';
import {Store} from '../store';

export type StateProps = Pick<Props, 'currentScore'>;

export default connect<StateProps>(
    (state: Store) => ({
        currentScore: state.currentScore
    })
)(
    CurrentScore
)