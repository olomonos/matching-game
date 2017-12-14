import * as React from 'react';
import TopScoreTable from '../containers/top-score-table';
import TopScoreMenu from '../containers/top-score-menu';

export const TopScore: React.StatelessComponent = () => (
    <div className='main-container'>
        <TopScoreMenu className='game-menu' />
        <TopScoreTable />
    </div>
);
