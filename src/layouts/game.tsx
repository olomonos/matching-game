import * as React from 'react';
import Field from '../containers/field';
import GameMenu from '../containers/game-menu';

export const Game: React.StatelessComponent = () => (
    <div>
        <GameMenu />
        <Field />
    </div>
);