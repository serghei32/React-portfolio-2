import styled from "styled-components";
import {theme} from "../layaout/styles/Theme";

export const SectionTitle = styled.h2`
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 600;
  font-size: 36px;
  letter-spacing: 5px;
  color: #fff;
  position: relative;
  //border: 1px solid red;
  margin-bottom: 90px;

  &::before {
    content: "";
    display: inline-block;
    height: 1px;
    width: 55px;
    background-color: ${theme.colors.accent};
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;
    position: absolute;
  }
`