import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import TelaLista from "./components/TelaLista";
import TelaDetalhes from "./components/TelaDetalhes";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 5rem;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class App extends React.Component {
  state = {
    telaAtual: "lista",
  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "lista":
        return <TelaLista irParaDetalhes={this.irParaDetalhes} />;
      case "detalhes":
        return <TelaDetalhes irParaLista={this.irParaLista} />;
      default:
        alert("Erro");
    }
  };

  irParaLista = () => this.setState({ telaAtual: "lista" });

  irParaDetalhes = () => this.setState({ telaAtual: "detalhes" });

  render() {
    return (
      <AppContainer>
        <GlobalStyle />
        <h1>Labefy</h1>
        {this.escolheTela()}
      </AppContainer>
    );
  }
}
