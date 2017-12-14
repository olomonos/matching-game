import * as React from 'react';
import MenuComponent from '../containers/menu';
import LocalGlobalSwitch from '../containers/local-global-switch';

export const Menu: React.StatelessComponent = () => (
    <div className='main-container'>
        <LocalGlobalSwitch />
        <MenuComponent />
    </div>
);
