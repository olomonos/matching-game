import {combineReducers} from 'redux';
import {Store} from '../types';
import {Reducer} from './reducer';

// import {continue} from './continue';
// import {currentScore} from './current-score';
import {topScore} from './top-score';

export default combineReducers({
    // continue,
    // currentScore,
    topScore
}) as Reducer<Store>;