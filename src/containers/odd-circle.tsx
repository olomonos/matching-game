import {connect} from 'react-redux';
import {Circle, Props} from '../components/circle';
import {nextRound} from '../store/actions/next-round';
import {Store} from '../store';
import {Coords} from '../store/types';
import {setOfRandomCoords} from '../utils/set-of-random-coords';

type OwnProps = {
    coords: Coords
}

export type StateProps = Pick<Props, 'coords'>;

export type DispatchProps = Pick<Props, 'onClick'>;

export default connect<StateProps, DispatchProps, OwnProps>(
    (state: Store, props) => ({
        coords: props.coords
    }),
    dispatch => ({
        onClick() {
            let newCircles = setOfRandomCoords(4);            
            dispatch(nextRound(newCircles));
        }
    })
)(
    Circle
)