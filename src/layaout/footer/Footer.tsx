import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const Footer = () => {
  return (
    <StyledFooter>

      <FlexWrapper direction={"column"} align={"center"}>
        <Name>Serghei</Name>

        <SolsialList>
          <SolsialItem>
            <SocialLink>
              <Icon width={"22"} height={"22"} viewBox={"0 0 22 22"} iconId={"instagram"}/>
            </SocialLink>
          </SolsialItem>

          <SolsialItem>
            <SocialLink>
              <Icon width={"22"} height={"22"} viewBox={"0 0 22 22"} iconId={"vk"}/>
            </SocialLink>
          </SolsialItem>

          <SolsialItem>
            <SocialLink>
              <Icon width={"22"} height={"22"} viewBox={"0 0 22 22"} iconId={"linkedin"}/>
            </SocialLink>
          </SolsialItem>

          <SolsialItem>
            <SocialLink>
              <Icon width={"22"} height={"22"} viewBox={"0 0 50 50"} iconId={"telegram"}/>
            </SocialLink>
          </SolsialItem>
        </SolsialList>
        <Copyrigth>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyrigth>
      </FlexWrapper>

    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 40px 0px;
  background-color: ${theme.colors.primaryBg};
`

const SolsialList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  border: 1px solid red;
  gap: 20px;
  margin-bottom: 30px;
`

const SolsialItem = styled.li`

`
const SocialLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.accent};


  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translatey(-10px);
    cursor: pointer;

  }

`

const Name = styled.span`
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 3px;
  margin-bottom: 33px;

  
  @media ${theme.media.mobile} {
    ${font({ weigth:700,Fmax:22, Fmin:16 })}
   
  }
`

const Copyrigth = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;

`