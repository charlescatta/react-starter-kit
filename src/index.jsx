import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Homepage from './pages/Home';
import GlobalStyles from './global-styles';

const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
        <Route path="*">
          <h1>404 NOT FOUND</h1>
        </Route>
      </Switch>
    </Router>
  </>
);

ReactDOM.render(<App />, document.querySelector('#root'));
