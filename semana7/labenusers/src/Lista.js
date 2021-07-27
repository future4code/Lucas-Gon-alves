import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  h3 {
    /* margin-top: 0; */
    display: flex;
    flex-direction: column;
  }

  button {
    display: inline-block;
    margin-top: 16px;
    padding: 4px 8px;
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
        <h3>Usuários Cadastrados:</h3>
        {this.props.users.map((user) => {
          return (
            <NameList key={user.id}>
              <p>{user.name}</p>
              <i class="far fa-trash-alt"></i>
            </NameList>
          );
        })}

        <button>Ir para o registro</button>
      </ListContainer>
    );
  }
}
