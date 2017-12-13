import {SetTopScore, setTopScore} from './set-top-score';
import {GameOver, gameOver} from './game-over';
import {NextRound, nextRound} from './next-round';
import {SetCurrentName, setCurrentName} from './set-current-name';
import {RefreshTopScore, refreshTopScore} from './refresh-top-score';
import {NewGame, newGame} from './new-game';
import {SetTimeLeft, setTimeLeft} from './set-time-left';
import {PauseGame, pauseGame} from './pause-game';
import {ResumeGame, resumeGame} from './resume-game';
import {SetIsLocal, setIsLocal} from './set-is-local';
import {SetIsPending, setIsPending} from './set-is-pending';

export type Action
    = SetTopScore
    | RefreshTopScore
    | GameOver
    | NextRound
    | SetCurrentName
    | NewGame
    | SetTimeLeft
    | PauseGame
    | ResumeGame
    | SetIsLocal
    | SetIsPending
    ;

export {
    SetTopScore, setTopScore,
    RefreshTopScore, refreshTopScore,
    GameOver, gameOver,
    NextRound, nextRound,
    SetCurrentName, setCurrentName,
    NewGame, newGame,
    SetTimeLeft, setTimeLeft,
    PauseGame, pauseGame,
    ResumeGame, resumeGame,
    SetIsLocal, setIsLocal,
    SetIsPending, setIsPending
};
