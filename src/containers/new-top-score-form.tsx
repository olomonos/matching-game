import {connect} from 'react-redux';
import {NewTopScoreForm, Props} from '../components/new-top-score-form';
import {setCurrentName} from '../store/actions/set-current-name';
// import {saveNewTopScore} from '../store/commands/save-new-top-score';
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
            // dispatch(saveNewTopScore())
        }
    })
)(
    NewTopScoreForm
)