import React from "react";
import { GlobalStyle } from "./App.styles";
import Etapa1 from "./components/Etapas/Etapa1";
import Etapa2 from "./components/Etapas/Etapa2";
import Etapa3 from "./components/Etapas/Etapa3";
import Final from "./components/Etapas/Final";

export default class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizarEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return "Erro 404";
    }
  };

  irParaProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1,
    });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <h1>LabenuForm</h1>
        {this.renderizarEtapa()}
        {this.state.etapa < 4 && (
          <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
        )}
      </div>
    );
  }
}
