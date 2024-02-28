import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";


export const HeaderMenu = (props: { menu: Array<string> }) => {
  return (
    <StyledHeaderMenu>

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

    </StyledHeaderMenu>
  );
};

export const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    list-style: none;
  }
  
  @media ${theme.media.tablet} {
    display: none;
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
    ${Mask}{
      transform:skewX(12deg) translateX(-5px); 
    }
    
  }
`



export const headerMenu = ["Home", "Skills", "Works", "Testimony", "Contacts"]
