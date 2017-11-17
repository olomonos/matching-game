import * as React from 'react';
import {Store} from '../store/types';

export type Props = {
    currentName: Store['currentScore']['name'],
    onNameInput: React.ChangeEventHandler<HTMLInputElement>
}

export const NewTopScoreForm: React.StatelessComponent<Props> = ({
    currentName,
    onNameInput
}) => {
    return (
        <div className='new-top-score-form'>
            <h5>Congratulations!</h5>
            <h6>You've got the top score. 
                Please enter your name to save it in the TopScore table.</h6>
            <div>
                <input 
                    placeholder='Placeholder' 
                    id='newTopScoreName' 
                    type='text' 
                    className='validate'
                    value={currentName}
                    onChange={onNameInput}
                />
                <label>Name</label>
            </div>
        </div>
    );
};