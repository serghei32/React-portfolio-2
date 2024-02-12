import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

export const Contact = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact </SectionTitle>
      <StyledForm>
        <Field/>
        <Field/>
        <Field as={"textarea"}/>
        <StyledBtn type={"submit"}>Send message</StyledBtn>
      </StyledForm>
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
  gap: 20PX;
  margin: 0 auto;

`

const Field = styled.input`
width: 100%;
`


const StyledBtn = styled.button`
  background-color: yellow;
`