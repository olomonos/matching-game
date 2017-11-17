import {combineReducers} from 'redux';
import {Store} from '../types';
import {Reducer} from './reducer';
import {gameOver} from './game-over';
import {currentCircles} from './current-circles';
import {currentScore} from './current-score';
import {topScore} from './top-score';

export default combineReducers({
    gameOver,
    currentCircles,
    currentScore,
    topScore
}) as Reducer<Store>;