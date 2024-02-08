import React from 'react';
import styled from "styled-components";
import photo from "../../assets/images/lejon.jpg"

export const Main = () => {
  return (
    <div>
      <div>
        <span>Hi There</span>
        <span> Serghei Sevciuc</span>
        <h2>Web developer</h2>
      </div>

      <Photo src={photo} alt=""/>
    </div>
  );
};


const Photo = styled.img`
  width: 450px;
  height: 300px;
  
`