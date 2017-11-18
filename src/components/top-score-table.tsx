import * as React from 'react';
import {Store} from '../store';
import {quantityOfTopScores} from '../constants';

export type Props = {
    topScore: Store['topScore']
}

export const TopScoreTable: React.StatelessComponent<Props> = ({topScore}) => {
    
    let lines = [];
    for (let i = 0; i < quantityOfTopScores; i++) {
        let name: string;
        let points: number | string;    
        if (topScore[i] !== undefined) {
            name = topScore[i].name;
            points = topScore[i].points;
        } else {
            name = '----';
            points = '--';
        }    
        lines.push(
            <li className="collection-item" key={i}>
                <div>
                    {name}
                    <div className='secondary-content'>
                        {points}
                    </div>
                    {/* <div className='secondary-content'>
                        {date}
                    </div> */}          {/* add dates to topScore[] */}
                </div>
            </li>
        );
    }

    return (
        <div className='top-score-table'>

            <ul className="collection with-header">
                <li className="collection-header"><h4>Top Score</h4></li>
                {lines}   
            </ul>
           
        </div>
    );
};