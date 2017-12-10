import {Middleware} from 'redux';
import {} from 'redux-thunk';
// import {Store as State} from '../types';
// import {Action} from '../actions';

export const logger: Middleware = store => next => (action: any) => {
    // console.group(action.type)
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    // console.groupEnd(action.type)
    return result;
};