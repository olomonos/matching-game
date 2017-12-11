import {combineReducers} from 'redux';
import {Store} from '../types';
import {Reducer} from './reducer';
import {routerReducer} from 'react-router-redux';
import {gameOver} from './game-over';
import {isPaused} from './is-paused';
import {currentCircles} from './current-circles';
import {oddCircle} from './odd-circle';
import {currentScore} from './current-score';
import {currentName} from './current-name';
import {topScore} from './top-score';
import {timeLeft} from './time-left';

export default combineReducers({
    gameOver,
    isPaused,
    currentCircles,
    oddCircle,
    currentScore,
    currentName,
    topScore,
    timeLeft,
    router: routerReducer
}) as Reducer<Store>;