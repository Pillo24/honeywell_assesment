import styled, { css } from 'styled-components'
import bg from '../../assets/images/bg.webp'

const margins = css`
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
`

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 900px;
  max-width: 900px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  box-shadow:
  2.5px 0.9px 10px rgba(0, 0, 0, 0.035),
  20px 7px 80px rgba(0, 0, 0, 0.07);
;
  
  @media (max-width: 500px) {
    flex-direction: column;
    height: 100vh;
  }
`
export const Header = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 5%;
  max-height: 200px;
  padding: 1em;
  width: 10%;
`

export const Box = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media (max-width: 500px) {
    width: 100%;
  }
`
export const BoxLogo = styled.div`
  align-self: end;
  display: flex;
  width: 25%;
  @media (max-width: 500px) {
    align-self: flex-start;
    width: 30%;
  }
`

export const BoxInfo = styled.div`
  align-items: baseline;
  //background-image: linear-gradient(to right top, #726bd1, #7277d7, #7383dc, #778fe0, #7c9ae3, #74a7ec, #6db3f3, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
  background-image: url(${bg});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  color: #fff;
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  justify-content: flex-start;
  ${margins};
  padding: 1em 2em;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  @media (max-width: 500px) {
    flex-basis: 30%;
  }
`

export const BoxForm = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  flex-basis: 50%;
  ${margins};
  padding: 1em 2em;
  @media (max-width: 500px) {
    flex-basis: 70%;
  }
`
