import React from 'react';
import styled from "styled-components";
import {Icon} from '../../../components/icon/Icon';


type SkillPropsType = {
  iconIdd: string
  title?: string
  text?: string
}


export const Skill = (props: SkillPropsType) => {
  return (
    < StyledSkill>
      <Icon iconId={props.iconIdd}/>
      < SkillsTitle>{props.title}</SkillsTitle>
      <SkillText> {props.text}</SkillText>
    </StyledSkill>
  );

};


const StyledSkill = styled.div`
  width: 33%;
  
`
const SkillsTitle = styled.h3`

`
const SkillText = styled.p`

`



