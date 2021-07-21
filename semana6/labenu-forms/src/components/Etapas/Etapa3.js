import React from "react";
import PerguntaAberta from "../PerguntaAberta";
import PerguntaOpcao from "../PerguntaOpcao";

export default class Etapa3 extends React.Component {
  render() {
    return (
      <div>
        <h3>Etapa 03 - Informações Gerais de Ensino</h3>
        <PerguntaAberta
          pergunta={"05. Por que você não terminou um curso de graduação?"}
        />
        <PerguntaOpcao
          pergunta={"06. Você fez algum curso complementar?"}
          opcoes={["", "Nenhum", "Inglês", "Informática"]}
        />
      </div>
    );
  }
}
