import {connect} from 'react-redux';
import {TopScoreTable, Props} from '../components/top-score-table';
import {Store} from '../store';
import {createSelector} from 'reselect';
import {orderBy} from 'lodash';

export type StateProps = Pick<Props, 'topScore'>;

const topScoreSelector = (state: Store) => state.topScore;
const sortedTopScore = createSelector(
    topScoreSelector,
    (topScore) => {
        return orderBy(topScore, ['points', 'name'], ['desc', 'asc']);
    }
);

export default connect<StateProps>(
    (state: Store) => ({
        topScore: sortedTopScore(state)
    }),
    dispatch => ({
    })
)(
    TopScoreTable
)