import React from 'react';
import ReactDOM from 'react-dom';

import sushivid from '@img/videos/sushis.mp4';
import logo from '@img/logo-sushi';
import NavBar from '@components/nav-bar/index';
import GlobalStyles from './global-styles';

const App = () => (
    <div>
        <GlobalStyles />
        <NavBar />
        <div>
            <img style={{ position: 'fixed', maxWidth: '300px' }} src={logo} />
            <video style={{ position: 'fixed', width: '100vw', zIndex: 0 }} width="100%" src={sushivid} autoPlay muted playsInline loop />
        </div>
    </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
