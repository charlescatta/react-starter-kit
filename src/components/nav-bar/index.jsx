/** @jsx jsx */
import React, { useState, useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import { useTrail, animated } from 'react-spring'

import logo from '@img/logo-sushi-white.svg'
import Menu from './menu';

const NavWrapper = styled.div`
  position: fixed;
  height: 100vh;
  z-index: 1;
  background: #222;
  color: #fff;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  cursor: pointer;
`;


const navlinks = [
  { name: 'Accueil', href: '#' },
  { name: 'Menu Sushis', href: '#' },
  { name: 'Menu Vins', href: '#' },
  { name: 'Contactez Nous', href: '#' },
  { name: 'Nos Succursales', href: '#' }
];

const Nav = ({ children }) => {
  const [shown, setShown] = useState(false);

  const toggleShown = useCallback(() => {
    setShown(!shown);
  }, [shown]);

  const trail = useTrail(navlinks.length, {
    from: { transform: 'translateX(-40px)', opacity: 0.0 },
    to: { transform: 'translateX(0px)', opacity: 1.0 },
    delay: 200
  });

  return (
    <>
      <Menu shown={shown} onHide={toggleShown}>
        <img src={logo} alt="SushiX" />
        <ul role="navigation">
          {trail.map((props, idx) => (
            <animated.li style={props}>{navlinks[idx].name}</animated.li>
          ))}
        </ul>
      </Menu>
      <NavWrapper onClick={toggleShown}>
        <NavContainer>
          {children}
        </NavContainer>
      </NavWrapper>
    </>
  );
};


export default () => (
  <Nav>
    <div>
      Click me
    </div>
  </Nav>
);