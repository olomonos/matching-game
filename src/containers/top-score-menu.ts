import {connect} from 'react-redux';
import {TopScoreMenu} from '../components/top-score-menu';
import {Store} from '../store/types';

export default connect(
    (state: Store) => ({
    }),
    dispatch => ({
    })
)(
    TopScoreMenu
)