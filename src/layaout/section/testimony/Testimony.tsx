import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/Slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Testimony = () => {
  return (
    <StyleTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper direction={"column"} align={"center"}>
        <Icon iconId={"quote"}/>
        <Slider/>
      </FlexWrapper>
    </StyleTestimony>
  );
};

const StyleTestimony = styled.section`
  background-color: lightpink;
  margin: 0 auto;
`

