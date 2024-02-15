import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/lejon.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify={"space-between"} align={'center'}>
          <div>
            <SmalText>Hi There</SmalText>
            <Name> <span>Serghei Sevciuc</span></Name>
            <MainTitle>A Web developer</MainTitle>
          </div>
          <PhotoWraper>
            <Photo src={photo} alt="foto"/>
          </PhotoWraper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #caaeb3;
  display: flex;

`

const Photo = styled.img`
  width: 450px;
  height: 300px;
  object-fit: cover;
`

const MainTitle = styled.h1`
`

const Name = styled.h4`
  font-size: 50px;
  font-weight: 700;
  font-family: 'Josefin Sans', sans-serif;
  letter-spacing: 0.05em;

  span {
    position: relative;
    z-index: 0;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`

const PhotoWraper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    width: 450px;
    height: 350px;
    left: -20px;
    bottom: -20px;
    z-index: -1;

    position: absolute;
    border: 5px solid ${theme.colors.accent};
  }
`

const SmalText = styled.h4`
  font-size: 14px;
  font-weight: 400;

`