import React from 'react';
import ReactDOM from 'react-dom';

import bgImg from '@img/placeholders/bg-2880x1600.jpg';
import GlobalStyles from './global-styles';

const App = () => (
    <div>
        <GlobalStyles />
        <h1>Hello World</h1>
        <img src={bgImg} alt="" />
    </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
