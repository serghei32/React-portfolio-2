import styled from "styled-components";
import {theme} from "../layaout/styles/Theme";
import {font} from "../layaout/styles/Common";

export const SectionTitle = styled.h2`
  ${font({family: "'Josefine Sans', sans-serif", weigth:600, Fmax:36, Fmin:30})};
  text-align: center;
  letter-spacing: 5px;
  position: relative;
  
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
    
    @media ${theme.media.mobile} {
      bottom: -24px;
    }
    
  }
`