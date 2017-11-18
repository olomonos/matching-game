import * as React from 'react';
import Field from '../containers/field';
import GameMenu from '../containers/game-menu';

export const Game: React.StatelessComponent = () => (
    <div>
        <GameMenu className='game-menu'/>
        <Field />
    </div>
);