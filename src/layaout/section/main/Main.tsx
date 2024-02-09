import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/lejon.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify={"space-between"} align={'center'}>
        <div>
          <span>Hi There</span>
          <span> Serghei Sevciuc</span>
          <MainTitle>Web developer</MainTitle>
        </div>
        <Photo src={photo} alt="foto"/>
      </FlexWrapper>
    </StyledMain>
  );
};


const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #caaeb3;
`

const Photo = styled.img`
  width: 450px;
  height: 300px;
`

const MainTitle = styled.h1`

`