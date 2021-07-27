import React from "react";
import styled from "styled-components";

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;

  input {
    padding: 4px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    padding: 4px 8px;
  }
`;

export default class Registro extends React.Component {
  render() {
    return (
      <div>
        <InputContainer>
          Nome:
          <input value={this.props.name} onChange={this.props.onChangeName} />
        </InputContainer>

        <ButtonContainer>
          <button onClick={this.props.criarUser}>Salvar</button>
          <button>Ir para a lista</button>
        </ButtonContainer>
      </div>
    );
  }
}
