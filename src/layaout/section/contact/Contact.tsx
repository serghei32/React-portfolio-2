import React from 'react';
import styled from "styled-components";
import {Container} from '../../../components/Container';
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledBtn} from "../../../components/StyledBtn";
import {theme} from "../../styles/Theme";

export const Contact = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contact </SectionTitle>
        <StyledForm>
          <Field/>
          <Field/>
          <Field as={"textarea"}/>
          <StyledBtn type={"submit"}>Send message</StyledBtn>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};


const StyledContacts = styled.section`

`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 540px;
  width: 100%;
  gap: 16px;
  margin: 0 auto;

`

const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border-color: ${theme.colors.borderColor};
  padding: 7px 15px;
  font-size: 12px;
  font-weight: 400;
  color: ${theme.colors.font};
  font-family: 'Poppins', sans-serif;
`


