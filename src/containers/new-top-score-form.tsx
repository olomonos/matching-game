import {connect} from 'react-redux';
import {NewTopScoreForm, Props} from '../components/new-top-score-form';
import {setCurrentName} from '../store/actions/set-current-name';
import {submitNewTopScoreForm} from '../store/commands/submit-new-top-score-form';
import {Store} from '../store';

export type StateProps = Pick<Props, 'currentName'>;

export type DispatchProps = Pick<Props, 'onNameInput' | 'onNameSave'>;

export default connect<StateProps, DispatchProps>(
    (state: Store) => ({currentName: state.currentName}),
    dispatch => ({
        onNameInput(e) {
            dispatch(setCurrentName(e.target.value));
        },
        onNameSave() {
            dispatch(submitNewTopScoreForm())
        }
    })
)(
    NewTopScoreForm
)