import {Store} from '../types';

export type SetCurrentName = {type: 'SetCurrentName', name: Store['currentName']};

export function setCurrentName(name: Store['currentName']): SetCurrentName {
    return {type: 'SetCurrentName', name};
};