import styled from "styled-components";
import { color } from "../resources/Theme";
import Bg from '../resources/assets/bg_pink.jpg';

const light = {
    '--main': color.main,
    '--primary': color.primary,
    '--secondary': color.secondary,
    '--light': color.light,
    '--clear': color.clear,
    '--white': color.white,
    '--black': color.black,
    '--red': color.red,
    '--green': color.green,
    '--blue': color.blue
}

const Background = styled.div`
    background-color: ${color.main};
    background:url(${Bg});
    background-repeat: no-repeat;
    background-size: cover; 
`;

const Layout = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    overflow: hidden;
`;

const AnimateFruit = styled.div `
    img {
        height: 90vh;
        margin-left: -500px;
        pointer-events: none;
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
    height: 100vh;
    width: 100%;
    display: grid;
    align-items: center;

    /* background:url(${Bg}); 
    background-repeat: repeat;
    background-size: contain; */
`;

export {
    light,
    Background,
    Layout,
    AnimateFruit,
    CardContainer
};