import styled from "styled-components";
import { device } from "../resources/Theme";
import Bg from '../resources/assets/bg_pink.jpg';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Background = styled.div`
    background-color: var(--main);
    background-image:url(${Bg});
    filter: var(--filter);

    background-repeat: no-repeat;
    background-size: cover; 
    width: 100%;
    min-height: 100vh;
`;

const Layout = styled(Background)`
    display: grid;
    grid-template-columns: 30% 40% 30%;
    align-items: center;
    justify-items: center;
    overflow: hidden;

    @media ${device.tablet} { 
        grid-template-columns: 30% 70%;
    }
    @media ${device.tabletM} { 
        grid-template-columns: 100%;
    }
`;

const AnimateFruit = styled.div `

    img {
        pointer-events: none;
    }

    .left {
        width: calc(100% + 35vmin);
        margin-left: -60%;
    }
    .right{
        width: 100%;
    }
    @media ${device.laptop} { 
        .left {
            width: calc(100% + 25vmin);
            margin-top: calc(-100% - 65vmin);
        }
        .right{
            margin-top: calc(100% + 30vmin);
            margin-left: 20%;
        }
    }
    @media ${device.tablet} { 
        .left {
            width: calc(100% + 25vmin);
            margin-top: calc(-100% - 5vmin);
        }
        .right{
            margin-top: calc(-110% - 75vmin);
        }
    }
    @media ${device.tabletM} { 
        .right{
            margin-top: -20px;
            width: calc(50% - 25vmin);
            margin-left: -20px;
        }
    }
    @media ${device.mobileL} { 
        .right{
            display: none;
        }
    }


    @media (prefers-reduced-motion: no-preference) {
        img {
            animation: Fruit-spin infinite 20s linear;
        }
    }

    @keyframes Fruit-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const CardContainer = styled.div`
    width: 500px;
    margin: 0 auto;
    
    @media ${device.mobile} { 
        width: 100%;
    }

    @media (prefers-reduced-motion: no-preference) {
        & {
            animation: Fade-in 1s ease-in-out;
        }
    }

    @keyframes Fade-in {
        from {
            width: 10%;
        }
        to {
            width: 80%;
        }
    }
`;

export {
    Layout,
    AnimateFruit,
    CardContainer,
    AppContainer
};