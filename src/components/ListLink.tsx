import styled from "styled-components";
import {theme} from "../layaout/styles/Theme";

export const ListLink = styled.a`
  font-weight: 400;
  font-size: 14px;
  padding: 10px;
  text-transform: uppercase;
  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      height: 10px;
    }
  }

  &:before {
    content: "";
    display: inline-block;
    //height: 10px;
    position: absolute;
    background-color: ${theme.colors.accent};
    left: 0;
    right: 0;
    bottom: 5px;
    z-index: -1;
  }
`