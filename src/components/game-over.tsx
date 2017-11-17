import * as React from 'react';
import {Store} from '../store/types';
import NewTopScoreForm from '../containers/new-top-score-form';

export type Props = {
    topScore: Store['topScore'],
    currentScore: Store['currentScore']
}

export const GameOver: React.StatelessComponent<Props> = ({topScore, currentScore}) => {
    
    // Move isNewTopScore to container

    let isNewTopScore: boolean = false;
    
    if (topScore !== null) {
        for (let i = 0; i < topScore.length; i++) {
            if (currentScore.points > topScore[i].points) {
                isNewTopScore = true;
                break;
            }
        }    
    } else {
        isNewTopScore = true;
    }

    return (
        <div className='game-over'>
            <h3>Game Over</h3>
            {isNewTopScore ?
                <NewTopScoreForm />
                : 
                <div>
                    <div className='new-top-score-form' />
                    <a className="waves-effect waves-light btn">
                        <i className="material-icons left">menu</i>
                        to the menu
                    </a>
                </div>
            }
        </div>
    );
};