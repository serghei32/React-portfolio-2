 import React from 'react';
import styled from "styled-components";
import { Container } from '../../../components/Container';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={"wrap"}>
          <Skill title={'html'}
                 iconIdd={'codeSvg'}
                 text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>

          <Skill title={'css3'}
                 iconIdd={'css'}
                 text={"xLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
          <Skill title={'web design'}
                 iconIdd={'figma'}
                 text={" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
          <Skill title={'react'}
                 iconIdd={'react'}
                 text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim "}/>
          <Skill title={'Styled componend'}
                 iconIdd={'stComponent'}
                 text={" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
          <Skill title={'Typescript'}
                 iconIdd={'typeScript'}
                 text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>

        </FlexWrapper>
      </Container>


    </StyledSkills>
  )
    ;
};


const StyledSkills = styled.section`
  background-color: #ffe5e4;
  min-height: 100vh;


`


