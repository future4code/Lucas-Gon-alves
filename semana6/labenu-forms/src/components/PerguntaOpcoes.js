import React from "react";

export class PerguntaOpcoes extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.pergunta}</p>
        <select name="select">
          {this.props.opcoes.map((opcao, index) => {
            return <option value={index}>{opcao}</option>;
          })}
        </select>
      </div>
    );
  }
}
