import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    padding: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    padding: 10px;
  }

  button {
    padding: 8px 12px;
    font-size: 1.1rem;
    margin: 8px;
  }
`;

export const DadosContainer = styled.div`
  padding: 10px;

  div,
  p {
    padding: 7px;
  }

  input,
  select {
    padding: auto 7px;
    font-size: 1rem;
    width: 185px;
    height: 25px;
  }
`;
