import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../layaout/styles/Theme";

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper>
        <Slide>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
          <Name>@Ivan Ivanov</Name>
        </Slide>
      </FlexWrapper>
      <Pagination>
        <span> </span>
        <span className={"active"}> </span>
        <span> </span>
      </Pagination>
    </StyledSlider>
  );
};


const StyledSlider = styled.div`
  //border: 1px solid red;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Slide = styled.div`
  text-align: center;
`

const Text = styled.p`
  font-weight: 400;
  line-height: 21px;
  margin-bottom: 15px;
`

const Name = styled.h3`
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 600;

`

const Pagination = styled.span`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);

    & + span {
      margin-left: 5px;
    }

    &.active {
      display: inline-block;
      width: 20px;
      height: 7px;
      border-radius: 2.5mm;
      background-color: ${theme.colors.accent};
      margin-left: 5px;

    }
  }


  //
  // span:nth-child(2) {
  // }
`