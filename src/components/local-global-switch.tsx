import * as React from 'react';
import {Store} from '../store';

export type Props = {
    isLocal: Store['isLocal'],
    isPending: Store['isPending'],
    onStorageToggle: React.ChangeEventHandler<HTMLInputElement>
}

export const LocalGlobalSwitch: React.StatelessComponent<Props> = ({
    isLocal,
    isPending,
    onStorageToggle
}) => {
    return (
        <div className="switch local-global">
            <label>
                Local Score
                <input 
                    type="checkbox" 
                    checked={!isLocal}
                    disabled={isPending}
                    onChange={onStorageToggle} 
                />
                <span className="lever"></span>
                Global Score
            </label>
        </div>
    );
};
