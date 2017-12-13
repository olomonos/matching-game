import {Store} from '../types';

export type SetIsLocal = {type: 'SetIsLocal', isLocal: Store['isLocal']};

export function setIsLocal(isLocal: Store['isLocal']): SetIsLocal {
    return {type: 'SetIsLocal', isLocal};
};