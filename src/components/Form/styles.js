import styled from 'styled-components';

const FormContainer = styled.form`
    height: 100%;
    width: 100%;
    border-radius: 10%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
    background: ${({login})=>(!!login ? 'var(--primary_light)' : 'var(--mid_light)')};
    color: var(--white);

    display: grid;
    grid-template-rows: 110px auto;
    justify-items: center;
    align-items: end;
    padding-bottom: 60px;
`;

const InputContainer = styled.div`
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center; 
    align-self: baseline;
    border-top: 1px solid var(--main);
    padding-top: 20px;
`;

const SubmitButton = styled.button`
    background: var(--gradient);
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    color: var(--white);
    margin-bottom: 20px;
    cursor: pointer;


    @media (prefers-reduced-motion: no-preference) {
        & {
            animation: Shine infinite 1.9s ease-in-out;
        }
        &:hover {
            background: var(--gradient);
            animation: none;
        }
    }

    @keyframes Shine {
        0% {
            top: 0px; 
            left: 0px;     
            background: var(--gradient0);
        }
        25%  {
            top: 0px; 
            left: 100px; 
            background: var(--gradient25);
        }
        50%  {
            top: 100px; 
            left: 100px; 
            background: var(--gradient50);
        }
        75%  {
            top: 100px; 
            left: 0px; 
            background: var(--gradient75);
        }
        100% {
            top: 0px; 
            left: 0px; 
            background: var(--gradient100);
        }
    }

    &:active{
        transform: translateY(4px);
    }
`;

const LinkContainer = styled.span`
    display: inline-flex;
    text-align: center;
    color: var(--white);
    padding-top: 6px;
    font-size: 18px;
`;
const Link = styled.div`
    font-weight: 600;
    text-decoration: underline;
    margin-left: 15px;
    cursor: pointer;

    &:hover{
        transform: rotate(-16deg);
    }
`;


export {
    FormContainer,
    InputContainer,
    SubmitButton,
    Link,
    LinkContainer
}