import {connect} from 'react-redux';
import {HalfFieldOdd, Props} from '../components/half-field-odd';
import {Store} from '../store';

export type StateProps = Pick<Props, 'currentCircles' | 'gameOver'>;

export default connect<StateProps>(
    (state: Store) => ({
        currentCircles: state.currentCircles,
        gameOver: state.gameOver
    }),
    dispatch => ({
    })
)(
    HalfFieldOdd
)