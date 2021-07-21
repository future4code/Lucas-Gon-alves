import React from "react";

export default class PerguntaOpcao extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.pergunta}</p>
        <select>
          {this.props.opcoes.map((opcao, index) => {
            return (
              <option key={index} value={index}>
                {opcao}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
