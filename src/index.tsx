import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
import './index.css';
import { Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {store, history} from './store';
import {Game} from './layouts/game';
import {TopScore} from './layouts/top-score';
import {Menu} from './layouts/menu';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/' exact component={Menu} />
        <Route path='/game' exact component={Game} />
        <Route path='/top-score' exact component={TopScore} />
        <Route path='/menu' exact component={Menu} />
        <Route path='*' render={() => 'Not Found!'} />
      </Switch>
    </ConnectedRouter>
  </Provider>
,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
