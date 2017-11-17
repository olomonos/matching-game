import {connect} from 'react-redux';
import {NewTopScoreForm, Props} from '../components/new-top-score-form';
import {setCurrentScore} from '../store/actions/set-current-score';
import {Store} from '../store';

export type StateProps = Pick<Props, 'currentName'>;

export type DispatchProps = Pick<Props, 'onNameInput'>;

export default connect<StateProps, DispatchProps>(
    (state: Store) => ({currentName: state.currentScore.name}),
    dispatch => ({
        onNameInput(e) {
            dispatch(setCurrentScore({name: e.target.value}));
        }
    })
)(
    NewTopScoreForm
)