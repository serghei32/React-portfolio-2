import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";


export const MobileMenu = (props: { menu: Array<string> }) => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup isOpen={false}>
        <ul>
          {props.menu.map((item, index) => {
            return <ListItem key={index}>
              <Link href="#">
                {item}
                <Mask><span>{item}</span></Mask>
                <Mask><span>{item}</span></Mask>
              </Link>
            </ListItem>
          })}
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

export const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`


const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(31, 31, 32, 0.9);
  height: 100vh;
  display: none;
  z-index: 100;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    list-style: none;
  }

`


const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index: 99999;
  border: none;
  //display: none;
  
  @media ${theme.media.tablet} {
    display: inline-block;
  }


  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;
    z-index: 500;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      z-index: 500;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        color: rgba(255, 255, 255, 0);
        transform: translateY(0) rotate(-45deg);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      z-index: 500;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        color: rgba(255, 255, 255, 0);
        transform: translateY(0) rotate(45deg);
        width: 36px;
      `}
    }
  }
`


export const Link = styled.a`
  font-weight: 400;
  font-size: 30px;
  font-weight: 400;
`

export const Mask = styled.span`
  position: absolute;
  color: #7572D5;
  height: 50%;
  display: inline-block;
  overflow-y: hidden;
  color: ${theme.colors.accent};
  top: 0;
  left: 0;

  & + & {
    top: 50%;

    span {
      transform: translateY(-50%);
      display: inline-block;
    }
  }
`

export const ListItem = styled.li`
  position: relative;
  border: 1px solid red;

  &:hover {
    ${Mask} {
      transform: skewX(12deg) translateX(-5px);
    }

  }
`


export const headerMenu = ["Home", "Skills", "Works", "Testimony", "Contacts"]
