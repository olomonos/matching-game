import {reject} from 'lodash';
import {Reducer} from './reducer';
import {Store} from '../types';

export const topScore: Reducer<Store['topScore']> = (state = [], action) => {
    switch (action.type) {
        case 'SetTopScore': {
            return action.topScore;
        }
        case 'RefreshTopScore': {
            const {addedScore, deletedScoreId} = action;
            const refreshed = reject(state, {id: deletedScoreId});
            refreshed.push(addedScore);
            return refreshed;
        }
        default: {
            return state;
        }
    }
};