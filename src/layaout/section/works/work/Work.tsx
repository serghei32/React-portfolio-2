import React from 'react';
import styled from 'styled-components';


type workpropsType = {
  title?:string
  text?:string
  path?:string
}

export const Work = (props:workpropsType) => {
  return (
    <StyledWork>
      <Image src={props.path} alt=""/>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href="#">Demo</Link>
      <Link href="#">Code</Link>
    </StyledWork>
  );
};


const StyledWork = styled.div`
  max-width: 540px;
  width: 100%;
  background-color: yellow;
`
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  
`
const Link= styled.a`
`
const Text= styled.p`
`
const Title= styled.h3`
`

