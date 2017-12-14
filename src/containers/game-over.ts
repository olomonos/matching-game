import {connect} from 'react-redux';
import {GameOver, Props} from '../components/game-over';
import {Store} from '../store/types';
import {createSelector} from 'reselect';
import {quantityOfTopScores} from '../constants';

export type StateProps = Pick<Props, 'isNewTopScore'>;

const topScoreSelector = (state: Store) => state.topScore;
const currentScoreSelector = (state: Store) => state.currentScore;
const isNewTopScoreSelector = createSelector(
    topScoreSelector,
    currentScoreSelector,
    (topScore, currentScore) => {
        let isNewTopScore = false;
        if (topScore.length >= quantityOfTopScores) {
            for (let i = 0; i < topScore.length; i++) {
                if (currentScore > topScore[i].points) {
                    isNewTopScore = true;
                    break;
                }
            }    
        } else if (currentScore > 0) {
            isNewTopScore = true;
        }
        return isNewTopScore;
    }
);

export default connect<StateProps>(
    (state: Store) => ({
        isNewTopScore: isNewTopScoreSelector(state)
    }),
    dispatch => ({
    })
)(
    GameOver
)