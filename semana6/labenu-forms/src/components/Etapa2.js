import React from "react";
import { DadosContainer } from "./Estilos";
import { PerguntaAberta } from "./PerguntaAberta";

export default class Etapa2 extends React.Component {
  render() {
    return (
      <DadosContainer>
        <h3>Etapa 2 - Informações do Ensino Superior</h3>
        <PerguntaAberta pergunta={"5. Qual curso?"} />
        <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
      </DadosContainer>
    );
  }
}
