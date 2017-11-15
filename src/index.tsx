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
import {Game} from './layouts/game';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/game" exact component={Game} />
      <Route path="*" render={() => "Not Found!"} />
    </Switch>
  </Router>
,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
