import React from 'react';
import styled from "styled-components";
import {Icon} from '../../../components/icon/Icon';
import {FlexWrapper} from "../../../components/FlexWrapper";
import * as Colorette from "colorette";


type SkillPropsType = {
  iconIdd: string
  title?: string
  text?: string
}


export const Skill = (props: SkillPropsType) => {
  return (
    < StyledSkill>
      <FlexWrapper direction={"column"} align={"center"}>
        <WraperIcon>
          <Icon iconId={props.iconIdd}/>
        </WraperIcon>
        < SkillsTitle>{props.title}</SkillsTitle>
        <SkillText> {props.text}</SkillText>
      </FlexWrapper>
    </StyledSkill>
  );
};


const StyledSkill = styled.div`
  width: 380px;
  padding: 62px 20px 42px;
  border: 1px solid red;


`
const SkillsTitle = styled.h3`
  margin-bottom: 15px;
  text-transform: uppercase;


`
const SkillText = styled.p`
  text-align: center;
 
`


const WraperIcon = styled.div`
  position: relative;
  z-index: 0;
  margin-bottom: 70px;

  &:after {
    content: "";
    width: 80px;
    height: 80px;
    //transform: ;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    top: 50%;
    left: 50%;
    transform: rotate(-45deg) translate(-50%,-50%);
    transform-origin: top left;
  
  }

`




