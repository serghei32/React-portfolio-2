import styled from "styled-components";
import {theme} from "../layaout/styles/Theme";

export const StyledBtn = styled.button`
  text-transform: uppercase;
  color: ${theme.colors.font};
  position: relative;
  padding: 10px 30px;
  border: none;
 

  &:hover {
    background-color: ${theme.colors.accent};
    transition: 0.5s;
  }

  &::before {
    content: '';
    display: inline-block;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    background-color: ${theme.colors.accent};
    height: 10px;
    width: 77px;
  }

`