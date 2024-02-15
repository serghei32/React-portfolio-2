import React from 'react';
import styled from "styled-components";


export const Menu = (props: {menuItems: Array<string> }) => {
  return (
    <StyledMenu>

      <ul>
        {props.menuItems.map((item, index) => {
          return <li key={index}>
            <a href="#">{item}</a>
          </li>
        })}
      </ul>

    </StyledMenu>
  );
};

export const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    list-style: none;
   
  }
`


export const worksItems = ["All", "Landing Page", "React", "Spa"]