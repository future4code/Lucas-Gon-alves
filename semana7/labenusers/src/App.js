import React from "react";
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuario from "./components/TelaListaUsuario";
import styled, { createGlobalStyle } from "styled-components";

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
    telaAtual: "cadastro",
  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista} />;
      case "lista":
        return <TelaListaUsuario irParaCadastro={this.irParaCadastro} />;
      default:
        return <div>Erro! Página não encontrada</div>;
    }
  };

  irParaCadastro = () => this.setState({ telaAtual: "cadastro" });

  irParaLista = () => this.setState({ telaAtual: "lista" });

  render() {
    return (
      <AppContainer>
        <GlobalStyle />
        {this.escolheTela()}
      </AppContainer>
    );
  }
}
