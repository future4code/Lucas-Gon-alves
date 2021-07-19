import React from "react";
import { DadosContainer } from "./Estilos";
import { PerguntaAberta } from "./PerguntaAberta";
import { PerguntaOpcoes } from "./PerguntaOpcoes";

export default class Etapa3 extends React.Component {
  render() {
    return (
      <DadosContainer>
        <h3>Etapa 3 - Informações Gerais de Ensino</h3>
        <PerguntaAberta
          pergunta={"5. Por que você não terminou um curso de graduação?"}
        />
        <PerguntaOpcoes
          pergunta={"6. Você fez algum curso complementar?"}
          opcoes={["", "Curso de Inglês", "Curso Técnico", "Nenhum"]}
        />
      </DadosContainer>
    );
  }
}
