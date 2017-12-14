import {connect} from 'react-redux';
import {Circle, Props} from '../components/circle';
import {nextRound} from '../store/actions/next-round';
import {Store} from '../store';

export type StateProps = Pick<Props, 'coords'>;

export type DispatchProps = Pick<Props, 'onClick'>;

export default connect<StateProps, DispatchProps>(
    (state: Store) => ({
        coords: state.oddCircle
    }),
    dispatch => ({
        onClick() {
            dispatch(nextRound());
        }
    })
)(
    Circle
)