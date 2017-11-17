import {SetTopScore, setTopScore} from './set-top-score';
import {GameOver, gameOver} from './game-over';
import {NextRound, nextRound} from './next-round';
import {SetCurrentName, setCurrentName} from './set-current-name';

export type Action
    = SetTopScore
    | GameOver
    | NextRound
    | SetCurrentName;

export {
    SetTopScore, setTopScore,
    GameOver, gameOver,
    NextRound, nextRound,
    SetCurrentName, setCurrentName
};
