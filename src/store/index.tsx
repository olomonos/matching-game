import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {getTopScore} from './commands/get-top-score';

export * from './types';

export const store = createStore(reducers, applyMiddleware(thunk));
store.dispatch(getTopScore());