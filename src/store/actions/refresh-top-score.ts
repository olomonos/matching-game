import {Score} from '../types';

export type RefreshTopScore = {
    type: 'RefreshTopScore',
    addedScore: Score,
    deletedScoreId?: Score['id']
};

export function refreshTopScore(
    addedScore: Score,
    deletedScoreId?: Score['id']
): RefreshTopScore {
    return {type: 'RefreshTopScore', deletedScoreId, addedScore};
};