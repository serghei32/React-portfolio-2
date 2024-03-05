import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/Slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {WraperIcon} from "../skills/Skill";
import {theme} from "../../styles/Theme";

export const Testimony = () => {
  return (
    <StyleTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper direction={"column"} align={"center"}>
        <WraperIcon>
          <Icon iconId={"quote"}/>
        </WraperIcon>
        <Slider/>
      </FlexWrapper>
    </StyleTestimony>
  );
};

const StyleTestimony = styled.section`
  background-color: lightpink;
  margin: 0 auto;

  @media ${theme.media.mobile} {
    padding: 80px 20px;
  }
`

