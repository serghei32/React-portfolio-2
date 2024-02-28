import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/lejon.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify={"space-between"} align={'center'} wrap={'wrap'}>
          <div>
            <SmalText>Hi There</SmalText>
            <Name>Serghei Sevciuc</Name>
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
  max-width: 450px;
  width: 100%;
  height: 300px;
  object-fit: cover;
  
  @media ${theme.media.mobile} {
    width: 350px;
    object-fit: cover;
  }
`

const MainTitle = styled.h1` 
  @media ${theme.media.mobile} {
    ${font({family: 'Josefine Sans, sans-serif', weigth:700, Fmax:30, Fmin:15})};
    //font-size: 20px;
  }
`

const Name = styled.h2`
  ${font({family: "'Josefine Sans', sans-serif", weigth:700, Fmax:50, Fmin:36})};
  //font-size: 50px;
  //font-weight: 700;
  //font-family: 'Josefin Sans', sans-serif;
  //letter-spacing: 0.05em;
  
  // @media ${theme.media.mobile} {
  //   font-size: 36px;
  // }
  


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
    
    @media ${theme.media.mobile} {
      content: '';
      border: 15px solid ${theme.colors.accent};
      width: 350px;
      height: 250px;
    }
  }
`

const SmalText = styled.h4`
  font-size: 14px;
  font-weight: 400;

`