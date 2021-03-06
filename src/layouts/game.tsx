import * as React from 'react';
import {Rules} from '../components/rules';
import Field from '../containers/field';
import GameMenu from '../containers/game-menu';
import CurrentScore from '../containers/current-score';

export const Game: React.StatelessComponent = () => (
    <div className='main-container'>
        <GameMenu className='game-menu'/>
        <Rules />
        <CurrentScore />
        <Field />
    </div>
);
