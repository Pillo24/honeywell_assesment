import React from 'react'
import styled from 'styled-components';

const Container = styled.form`
    display: grid;
    align-items: center;
    justify-items: center;

    height: 500px;
    width: 90%;
    border-radius: 10%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;

    background: var(--light);
    background: linear-gradient(30deg, var(--secondary) 0%, var(--main) 40%, var(--light) 85%, var(--secondary) 100%);

    color: var(--white);


    @media (prefers-reduced-motion: no-preference) {
        & {
            animation: Fade-in 0.6s ease-out;
        }
    }

    @keyframes Fade-in {
        from {
            margin-left: -120%;
        }
        to {
            margin-left: 0;
        }
    }
`;
const FormContainer = styled.form`
    /* background: var(--black); */
`;



const Form = ({onSubmit, title, children}) => {
  return (
    <Container>
        <h1>{title}</h1>
        <FormContainer onSubmit={onSubmit} noValidate>
        <div>{children}</div>
        </FormContainer>
    </Container>
  )
}

export default Form;
