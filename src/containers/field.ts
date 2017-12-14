import {connect} from 'react-redux';
import {Field, Props} from '../components/field';
import {Store} from '../store/types';

export type StateProps = Pick<Props, 'gameOver'>;

export default connect<StateProps>(
    (state: Store) => ({
        gameOver: state.gameOver
    }),
    dispatch => ({
    })
)(
    Field
)