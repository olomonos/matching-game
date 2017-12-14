import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import reducers from './reducers';
import {getTopScore} from './commands/get-top-score';
import {timer} from './middlewares/timer';
export * from './types';

export const history = createHistory()

export const store = createStore(
    reducers,
    applyMiddleware(thunk, routerMiddleware(history), timer)
);
store.dispatch(getTopScore());
