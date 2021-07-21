import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    height: 100vh;
    padding: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  h1, h2, h3, p {
    padding: 10px;
  }

  button, input, select {
    padding: 3px 5px;
  }

  button {
    display: inline-block;
    margin-top: 15px;
  }
`;
