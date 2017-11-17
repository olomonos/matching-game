import {connect} from 'react-redux';
import {NewTopScoreForm, Props} from '../components/new-top-score-form';
import {setCurrentName} from '../store/actions/set-current-name';
import {Store} from '../store';

export type StateProps = Pick<Props, 'currentName'>;

export type DispatchProps = Pick<Props, 'onNameInput'>;

export default connect<StateProps, DispatchProps>(
    (state: Store) => ({currentName: state.currentName}),
    dispatch => ({
        onNameInput(e) {
            dispatch(setCurrentName(e.target.value));
        }
    })
)(
    NewTopScoreForm
)