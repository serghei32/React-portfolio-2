import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu, headerMenu} from "../../components/menu/Menu";



export const Header = () => {
  return (
    <StyledHeader>
      <Logo/>
      <Menu menuItems={headerMenu}/>
    </StyledHeader>
  );
};


const StyledHeader = styled.header`
  background-color: green;
`