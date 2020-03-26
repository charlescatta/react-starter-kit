import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from '@components/nav-bar/index';
import GlobalStyles from './global-styles';

const App = () => (
    <div>
      <GlobalStyles />

    </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
