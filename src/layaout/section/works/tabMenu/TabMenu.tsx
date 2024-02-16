import React from 'react';
import styled from "styled-components";
import {ListLink} from "../../../../components/ListLink";


export const TabMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>

      <ul>
        {props.menuItems.map((item, index) => {
          return <ListItem key={index}>
            <ListLink href="#">{item}</ListLink>
          </ListItem>
        })}
      </ul>

    </StyledMenu>
  );
};

export const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
    list-style: none;
  }
`
const ListItem = styled.li`
 
`




export const worksItems = ["All", "Landing Page", "React", "Spa"]