import React from "react";
import PerguntaAberta from "../PerguntaAberta";

export default class Etapa2 extends React.Component {
  render() {
    return (
      <div>
        <h3>Etapa 02 - Informações do Ensino Superior</h3>
        <PerguntaAberta pergunta={"05. Qual é o seu curso?"} />
        <PerguntaAberta pergunta={"06. Qual é a unidade de ensino?"} />
      </div>
    );
  }
}
