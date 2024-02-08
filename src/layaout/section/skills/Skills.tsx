import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./Skill";

export const Skills = () => {
  return (

    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper >
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
      </FlexWrapper>
    </StyledSkills>
  )
    ;
};

const StyledSkills = styled.section`
background-color:yellow ;
  border: 1px solid red;
`
