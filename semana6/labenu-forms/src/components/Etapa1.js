import React from "react";
import { DadosContainer } from "./Estilos";
import { PerguntaAberta } from "./PerguntaAberta";
import { PerguntaOpcoes } from "./PerguntaOpcoes";

export default class Etapa1 extends React.Component {
  render() {
    return (
      <DadosContainer>
        <h3>Etapa 1 - Dados Gerais</h3>
        <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
        <PerguntaAberta pergunta={"2. Qual sua idade?"} />
        <PerguntaAberta pergunta={"3. Qual seu email?"} />
        <PerguntaOpcoes
          pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo",
          ]}
        />
      </DadosContainer>
    );
  }
}
