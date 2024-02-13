import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>

      <FlexWrapper direction={"column"} align={"center"}>
        <Name>Serghei</Name>
        <SolsialList>

          <SolsialItem>
            <SocialLink>
              <Icon iconId={"instagram"}/>
            </SocialLink>
          </SolsialItem>

          <SolsialItem>
            <SocialLink>
              <Icon iconId={"vk"}/>
            </SocialLink>
          </SolsialItem>

          <SolsialItem>
            <SocialLink>
              <Icon iconId={"telegram"}/>
            </SocialLink>
          </SolsialItem>

          <SolsialItem>
            <SocialLink>
              <Icon iconId={"linkedin"}/>
            </SocialLink>
          </SolsialItem>

        </SolsialList>
      </FlexWrapper>

    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: orangered;
  min-height: 50vh;
`
const SolsialList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 30px;



`
const SolsialItem = styled.li`

`
const SocialLink = styled.a`
`
const Name = styled.span`

`
