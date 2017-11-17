import {connect} from 'react-redux';
import {Circle, Props} from '../components/circle';
import {gameOver} from '../store/actions/game-over';
import {Store} from '../store';
import {Coords} from '../store/types';

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
            dispatch(gameOver());       // not gameOver();   !!!
        }
    })
)(
    Circle
)