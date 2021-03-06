import {combineReducers} from 'redux';
import {Store} from '../types';
import {Reducer} from './reducer';
import {routerReducer} from 'react-router-redux';
import {isLocal} from './is-local';
import {gameOver} from './game-over';
import {isPaused} from './is-paused';
import {currentCircles} from './current-circles';
import {oddCircle} from './odd-circle';
import {currentScore} from './current-score';
import {currentName} from './current-name';
import {topScore} from './top-score';
import {isPending} from './is-pending';
import {timeLeft} from './time-left';

export default combineReducers({
    isLocal,
    gameOver,
    isPaused,
    currentCircles,
    oddCircle,
    currentScore,
    currentName,
    topScore,
    isPending,
    timeLeft,
    router: routerReducer
}) as Reducer<Store>;