import React from "react";
import { DadosContainer } from "./Estilos";

export default class Final extends React.Component {
  render() {
    return (
      <DadosContainer>
        <h3>O formulário acabou</h3>
        <div>
          <p>Agradecemos a sua participação!</p>
          <p>Em breve entraremos em contato contigo.</p>
        </div>
      </DadosContainer>
    );
  }
}
