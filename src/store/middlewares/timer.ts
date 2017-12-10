import {Middleware, MiddlewareAPI} from 'redux';
import {gameOver, setTimeLeft} from '../actions';
import {ROUND_DURATION} from '../../constants';

class GameController<S> {
    private interval: number | null = null;
    private counter: number = ROUND_DURATION;

    constructor(
        private store: MiddlewareAPI<S>
    ) {}

    start() {
        this.setCounter(ROUND_DURATION);
        this.startTimer();
    }

    nextRound() {
        this.setCounter(this.counter + ROUND_DURATION);
        this.startTimer();
    }

    stop() {
        this.stopTimer();
    }

    resume() {
        this.startTimer();
    }

    private setCounter(value: number) {
        this.counter = value;
        this.store.dispatch(setTimeLeft(value));
    }

    private startTimer() {
        this.stopTimer();
        this.interval = window.setInterval(() => this.tick(), 1000);
    }

    private stopTimer() {
        if (this.interval) {
            window.clearInterval(this.interval);
            this.interval = null;
        }
    }

    private tick() {
        this.setCounter(this.counter - 1);
        if (this.counter <= 0) {
            this.stopTimer();
            this.store.dispatch(gameOver());
        }
    }
}

export const timer: Middleware = store => {
    
    const gameController = new GameController(store);
    
    return next => (action: any) => {
        if (typeof action === 'object') {
            switch (action.type) {
                case 'NewGame':
                    gameController.start()
                    break;
                case 'NextRound':
                    gameController.nextRound();
                    break;
                case 'GameOver':
                    gameController.stop();
                    break;
                case 'PauseGame':
                    gameController.stop();
                    break;
                case 'ResumeGame':
                    gameController.resume();
                    break;
            }
        }
        
        let result = next(action);

        return result;
    }
};