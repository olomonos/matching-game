import {connect} from 'react-redux';
import {HalfField, Props} from '../components/half-field';
import {Store} from '../store';

export type StateProps = Pick<Props, 'currentCircles'>;

export default connect<StateProps>(
    (state: Store) => ({
        currentCircles: state.currentCircles
    }),
    dispatch => ({
    })
)(
    HalfField
)