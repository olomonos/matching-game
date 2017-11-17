import {SetTopScore, setTopScore} from './set-top-score';
import {GameOver, gameOver} from './game-over';
import {SetCurrentScore, setCurrentScore} from './set-current-score';

export type Action
    = SetTopScore
    | GameOver
    | SetCurrentScore;

export {
    SetTopScore, setTopScore,
    GameOver, gameOver,
    SetCurrentScore, setCurrentScore
};
