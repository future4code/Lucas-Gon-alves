import React from "react";

export class PerguntaAberta extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.pergunta}</p>
        <input />
      </div>
    );
  }
}
