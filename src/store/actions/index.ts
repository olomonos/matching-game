import {SetTopScore, setTopScore} from './set-top-score';
import {GameOver, gameOver} from './game-over';
import {NextRound, nextRound} from './next-round';
import {SetCurrentName, setCurrentName} from './set-current-name';
import {RefreshTopScore, refreshTopScore} from './refresh-top-score';
import {NewGame, newGame} from './new-game';
import {SetTimeLeft, setTimeLeft} from './set-time-left';

export type Action
    = SetTopScore
    | RefreshTopScore
    | GameOver
    | NextRound
    | SetCurrentName
    | NewGame
    | SetTimeLeft ;

export {
    SetTopScore, setTopScore,
    RefreshTopScore, refreshTopScore,
    GameOver, gameOver,
    NextRound, nextRound,
    SetCurrentName, setCurrentName,
    NewGame, newGame,
    SetTimeLeft, setTimeLeft
};
