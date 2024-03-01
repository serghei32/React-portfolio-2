import React from 'react';
import styled from "styled-components";
import {ListLink} from "../../../../components/ListLink";
import {theme} from "../../../styles/Theme";


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
  display: flex;
  justify-content: center;
  border: 1px solid red;
  margin-bottom: 40px;
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    max-width: 352px;
    width: 100%;
  }

`
const ListItem = styled.li`

`


export const worksItems = ["All", "Landing Page", "React", "Spa"]