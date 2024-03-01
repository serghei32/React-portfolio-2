import React from 'react';
import styled from 'styled-components';
import {ListLink} from '../../../../components/ListLink';
import {theme} from "../../../styles/Theme";
import {StyledBtn} from "../../../../components/StyledBtn";


type workpropsType = {
  title?: string
  text?: string
  path?: string
}

export const Work = (props: workpropsType) => {
  return (
    <StyledWork>
      <ImageWrapper>
        <Image src={props.path} alt=""/>
        <StyledBtn>View Project</StyledBtn>
      </ImageWrapper>

      <DescriptionWrapper>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <ListLink href="#">Demo</ListLink>
        <ListLink href="#">Code</ListLink>
      </DescriptionWrapper>
    </StyledWork>
  );
};


const StyledWork = styled.div`
  max-width: 540px;
  width: 330px;
  background-color: ${theme.colors.secondaryBg};
  flex-grow: 1;

  ${ListLink} {
    padding: 10px 0;
    margin-right: 10px;
  }

  @media ${theme.media.desctop} {
    justify-content: center;

  }
`
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const ImageWrapper = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    transition: 0.5s;
    opacity: 0;
  }
  
  ${StyledBtn} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    opacity: 0;

    &::before {
      width: 0;
      height: 0;
    }
  }
  
  

  &:hover {
    &::before {
      content: '';
      position: absolute;
      //background-color: rgba(0, 0, 0, 0.3);
      //backdrop-filter: blur(4px);
      //transition: 0.5s;
      opacity: 1;
    }


    ${StyledBtn} {
      opacity: 1;
      padding: 10px 30px;
      background-color: ${theme.colors.accent};
      transition: 0.7s;
    }
  }



  
  @media ${ theme.media.tablet}{
    &::before {
      opacity: 1;
    }
    
  }
`


const Title = styled.h3`
  margin-bottom: 14px;
`

const Text = styled.p`
  margin-bottom: 10px`

const DescriptionWrapper = styled.div`
  padding: 25px 20px;
`

