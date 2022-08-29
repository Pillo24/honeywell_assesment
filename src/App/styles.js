import styled from "styled-components";
import { color, bg1, bg2, bg3, bg4 } from "../resources/Theme";
import Bg from '../resources/assets/bg_pink.jpg';

const light = {
    '--main': color.main,
    '--primary': color.primary,
    '--secondary': color.secondary,
    '--mid': color.mid,
    '--primary_light': color.primary_light,
    '--mid_light': color.mid_light,
    '--white': color.white,
    '--black': color.black,
    '--red': color.red,
    '--green': color.green,
}

const gra1 = {
    '--gradient': bg1.gradient,
    '--gradient0': bg1.gradient0,
    '--gradient25': bg1.gradient25,
    '--gradient50': bg1.gradient50,
    '--gradient75': bg1.gradient75,
    '--gradient100': bg1.gradient100,
}

const gra3 = {
    '--gradient': bg3.gradient,
    '--gradient0': bg3.gradient0,
    '--gradient25': bg3.gradient25,
    '--gradient50': bg3.gradient50,
    '--gradient75': bg3.gradient75,
    '--gradient100': bg3.gradient100,
}

const gra4 = {
    '--gradient': bg4.gradient,
    '--gradient0': bg4.gradient0,
    '--gradient25': bg4.gradient25,
    '--gradient50': bg4.gradient50,
    '--gradient75': bg4.gradient75,
    '--gradient100': bg4.gradient100,
}

const Background = styled.div`
    background-color: ${color.main};
    background-image:url(${Bg});
    background-repeat: no-repeat;
    background-size: cover; 
    width: 100%;
    min-height: 100vh;
`;

const Layout = styled(Background)`
    display: grid;
    grid-template-columns: 25% 50% 25%;
    align-items: center;
    justify-items: center;
    overflow: hidden;
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
    width: 90%;
    margin: 0 auto;

    @media (prefers-reduced-motion: no-preference) {
        & {
            animation: Fade-in 1s ease-in-out;
        }
    }

    @keyframes Fade-in {
        from {
            width: 20%;
        }
        to {
            width: 100%;
        }
    }
`;

export {
    light,
    gra1,
    gra3,
    gra4,
    Layout,
    AnimateFruit,
    CardContainer
};