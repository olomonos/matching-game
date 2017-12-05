import {connect} from 'react-redux';
import {InactiveCircle, Props} from '../components/inactive-circle';
import {Store, Coords} from '../store';

type OwnProps = {
    coords: Coords
}

export type StateProps = Pick<Props, 'coords'>;

export default connect<StateProps, undefined, OwnProps>(
    (state: Store, props) => ({
        coords: props.coords
    })
)(
    InactiveCircle
)