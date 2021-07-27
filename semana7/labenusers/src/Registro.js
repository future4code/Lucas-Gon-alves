import React from "react";
import styled from "styled-components";

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px 0;

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
        <button onClick={this.props.goToList}>Ir para a lista</button>
        <InputContainer>
          Nome:
          <input value={this.props.name} onChange={this.props.onChangeName} />
        </InputContainer>
        <InputContainer>
          Email:
          <input value={this.props.email} onChange={this.props.onChangeEmail} />
        </InputContainer>

        <ButtonContainer>
          <button onClick={this.props.onAddNameToList}>Salvar</button>
        </ButtonContainer>
      </div>
    );
  }
}
