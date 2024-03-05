import React from 'react';
import styled from "styled-components";
import {StyledBtn} from "../../../components/StyledBtn";
import {SectionTitle} from "../../../components/SectionTitle";
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <SectionTitle>I Am Available For Freelance</SectionTitle>
      <StyledBtn type={"submit"}>hire me</StyledBtn>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  text-align: center;
  padding: 80px 15px;
  
  @media ${theme.media.mobile} {
    line-height: 28px;
    letter-spacing: 3px;
    font-size:30px;
          
      
      

  }
`

