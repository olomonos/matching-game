import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
import './index.css';
import {
  HashRouter as Router,
  Route, Switch
} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import {Game} from './layouts/game';
import {TopScore} from './layouts/top-score';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/game' exact component={Game} />
        <Route path='/top-score' exact component={TopScore} />
        <Route path='*' render={() => 'Not Found!'} />
      </Switch>
    </Router>
  </Provider>
,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
