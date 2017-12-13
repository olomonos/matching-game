import {Store} from '../types';

export type SetIsPending = {type: 'SetIsPending', isPending: Store['isPending']};

export function setIsPending(isPending: Store['isPending']): SetIsPending {
    return {type: 'SetIsPending', isPending};
};