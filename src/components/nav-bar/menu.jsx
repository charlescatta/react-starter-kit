import React from 'react';
import styled from '@emotion/styled';

const MenuWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.95);
  position: fixed;
  top: 0;
  left: 0;
  transition: transform .5s cubic-bezier(0.4, 0.0, 0.2, 1);
  ${({ shown }) => (shown ? `
      transform: translate3d(0vw, 0, 0);
    ` : `
      transform: translate3d(-100vw, 0, 0);
  `)}
  overflow: scroll;
  z-index: 1000;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;

  & > div {
    max-width: 1200px;
    max-height: 800px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    & > img {
      max-width: 400px;
      padding: 24px 0;
    }
    ul {
      list-style: none;
      li {
        padding: 0.5rem 0;
        text-transform: uppercase;
        font-size: 1.8rem;
        cursor: pointer;
        display: block;
        position: relative;
        &:hover {
          &:after {
            opacity: 1.0;
            transform: scaleX(1.0);
          }
        }
        &:after {
          position: absolute;
          content: "";
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          transform: scaleX(0.0);
          opacity: 0;
          height: 3px;
          background: #222;
          transition: transform 0.6s cubic-bezier(0.0, 0.0, 0.2, 1);
        }
      }
    }
  }
`

const SlideMenu = ({ shown, onHide, children }) => {
  return (
    <MenuWrapper shown={shown}>
      <MenuContainer onClick={onHide}>
        <div>
          { children }
        </div>
      </MenuContainer>
    </MenuWrapper>
  );
};

export default SlideMenu;
