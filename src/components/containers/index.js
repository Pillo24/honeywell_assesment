import styled, { css } from 'styled-components'

const margins = css`
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
`

export const Container = styled.div`
  align-items: stretch;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex: 0 0 100%;
  flex-direction: row;
  height: 500px;
  justify-content: center;
  max-width: 900px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  
  @media (max-width: 500px) {
    flex-direction: column;
  }
`

export const BoxInfo = styled.div`
  align-items: center;
  background-image: linear-gradient(to right top, #726bd1, #7277d7, #7383dc, #778fe0, #7c9ae3, #74a7ec, #6db3f3, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
  border-radius: 10px 0 0 10px;
  color: #fff;
  display: flex;
  flex-basis: 50%;
  justify-content: center;
  ${margins};
  padding: 1em 2em;
  -webkit-border-radius: 10px 0 0 10px;
  -moz-border-radius: 10px 0 0 10px;
  -ms-border-radius: 10px 0 0 10px;
  -o-border-radius: 10px 0 0 10px;
  @media (max-width: 500px) {
    display: none;
    order: 2;
  }
`

export const BoxForm = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  flex-basis: 50%;
  ${margins};
  padding: 1em 2em;
`
