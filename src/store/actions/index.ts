import {SetTopScore, setTopScore} from './set-top-score';
import {GameOver, gameOver} from './game-over';
import {NextRound, nextRound} from './next-round';
import {SetCurrentName, setCurrentName} from './set-current-name';
import {NewGame, newGame} from './new-game';

export type Action
    = SetTopScore
    | GameOver
    | NextRound
    | SetCurrentName
    | NewGame;

export {
    SetTopScore, setTopScore,
    GameOver, gameOver,
    NextRound, nextRound,
    SetCurrentName, setCurrentName,
    NewGame, newGame
};
