import {Middleware} from 'redux';
import {gameOver, setTimeLeft} from '../actions';

export const timer: Middleware = store => {
    let interval: number | null = null;
    let counter = 0;
    
    function startTimer() {
        interval = window.setInterval(tick, 1000);
    }
    
    function stopTimer() {
        if (interval) {
            window.clearInterval(interval);
            interval = null;
        }
    }
    
    function resetTimer() {
        stopTimer();
        counter += 10;
        store.dispatch(setTimeLeft(counter));        
        startTimer();
    }
    
    function tick() {
        counter--;
        store.dispatch(setTimeLeft(counter));
        if (counter <= 0) {
            stopTimer();
            store.dispatch(gameOver());
        }
    }
    
    return next => (action: any) => {
        if (typeof action === 'object') {
            if (action.type === 'NewGame' || action.type === 'NextRound') {
                resetTimer();
            } else if (action.type === 'GameOver') {
                stopTimer();
            }
        }
        
        let result = next(action);

        return result;
    }
};