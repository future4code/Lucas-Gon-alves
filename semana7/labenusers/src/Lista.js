import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  h3 {
    display: flex;
    flex-direction: column;
  }

  button {
    padding: 1px 6px;
  }
`;

const NameList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid black;

  p {
    margin: 0;
    padding: 0 16px;
  }

  i {
    padding: 0 16px;
    cursor: pointer;
  }
`;

export default class Lista extends React.Component {
  render() {
    return (
      <ListContainer>
        <button onClick={this.props.goToReg}>Ir para o registro</button>
        <h3>Usuários Cadastrados</h3>
        {this.props.nameList.map((user, index) => {
          return (
            <NameList key={index}>
              <p>{user.name}</p>
              <i
                onClick={() => this.props.onRemoveNameList(user.id)}
                class="far fa-trash-alt"
              ></i>
            </NameList>
          );
        })}
      </ListContainer>
    );
  }
}
