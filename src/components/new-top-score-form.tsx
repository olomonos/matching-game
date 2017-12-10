import * as React from 'react';
import {Store} from '../store/types';

export type Props = {
    currentName: Store['currentName'],
    currentScore: Store['currentScore'],
    onNameInput: React.ChangeEventHandler<HTMLInputElement>,
    onNameSave: () => void
} & React.HTMLAttributes<HTMLDivElement>

export const NewTopScoreForm: React.StatelessComponent<Props> = ({
    currentName,
    currentScore,
    onNameInput,
    onNameSave,
    className,
    ...rest
}) => {
    return (
        <div className={'card ' + className } {...rest}>
            <div className='card-content'>
                <h5>Congratulations!</h5>
                <h6>Your score is {currentScore}. 
                    Please enter your name to save it in the Top Score table.</h6>
                <div>
                    <input 
                        placeholder='Name' 
                        id='newTopScoreName' 
                        type='text' 
                        className='validate'
                        value={currentName}
                        onChange={onNameInput}
                    />
                    <label></label>
                    <a 
                        className="waves-effect waves-light btn"
                        onClick={onNameSave}
                    >save</a>
                </div>
            </div>
        </div>
    );
};