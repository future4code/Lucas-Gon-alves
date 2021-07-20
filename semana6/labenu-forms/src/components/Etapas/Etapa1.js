import React from "react";
import PerguntaAberta from "../PerguntaAberta";
import PerguntaOpcao from "../PerguntaOpcao";

export default class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h3>Etapa 01 - Dados Gerais</h3>
        <PerguntaAberta pergunta={"01. Qual é o seu nome?"} />
        <PerguntaAberta pergunta={"02. Qual é sua idade?"} />
        <PerguntaAberta pergunta={"03. Qual é o seu email?"} />
        <PerguntaOpcao
          pergunta={"04. Qual é a sua escolaridade?"}
          opcoes={[
            "Ensino Médio Incompleto",
            "Ensino Médio Completo",
            "Ensino Superior Incompleto",
            "Ensino Superior Completo",
          ]}
        />
      </div>
    );
  }
}
