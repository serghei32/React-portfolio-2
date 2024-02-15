import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu, worksItems} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/project1.webp"
import timerImg from "./../../../assets/images/project2.webp"
import {Container} from "../../../components/Container";

export const Works = () => {
  return (
    <StyledWorks>


      <Container>
        <SectionTitle>My Works</SectionTitle>
        <Menu menuItems={worksItems}/>
        <FlexWrapper justify={"space-between"}>

          <Work path={socialImg}
                title={"Social Network"}
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do" +
                  " eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>

          <Work path={timerImg}
                title={"Timer"}
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do" +
                  " eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>

        </FlexWrapper>
      </Container>

    </StyledWorks>
  );
};


const StyledWorks = styled.section`
  //min-height: 100vh;
  background-color: lightskyblue;
`
