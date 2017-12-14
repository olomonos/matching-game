import {connect} from 'react-redux';
import {LocalGlobalSwitch, Props} from '../components/local-global-switch';
import {Store} from '../store/types';
import {setIsLocal} from '../store/actions';
import {getTopScore} from '../store/commands/get-top-score';

export type StateProps = Pick<Props, 'isLocal' | 'isPending'>;

export type DispatchProps = Pick<Props, 'onStorageToggle'>;

export default connect<StateProps, DispatchProps>(
    (state: Store) => ({
        isLocal: state.isLocal,
        isPending: state.isPending
    }),
    dispatch => ({
        onStorageToggle(e) {
            dispatch(setIsLocal(e.currentTarget.checked));
            dispatch(getTopScore());
        }
    })
)(
    LocalGlobalSwitch   
)
