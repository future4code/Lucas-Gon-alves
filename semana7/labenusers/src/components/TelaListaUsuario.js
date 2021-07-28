import axios from "axios";
import React from "react";
import styled from "styled-components";

const ListaContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  button {
    padding: 4px;
    font-size: 0.9rem;
    display: inline-block;
    max-width: 150px;
    margin: 0 auto;
  }
`;

const CardUsuario = styled.div`
  border-bottom: 1px solid black;
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    cursor: pointer;
  }
`;

export default class TelaListaUsuario extends React.Component {
  state = {
    usuarios: [],
  };

  componentDidMount() {
    this.pegarUsuarios();
  }

  pegarUsuarios = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, {
        headers: {
          Authorization: "lucas-fernandes-lovelace",
        },
      })
      .then((res) => {
        this.setState({ usuarios: res.data });
      })
      .catch((err) => {
        alert("Ocorreu um problema, tente novamente.");
      });
  };

  deletarUsuario = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: "lucas-fernandes-lovelace",
        },
      })
      .then((res) => {
        alert("Usuário deletado com sucesso");
        this.pegarUsuarios();
      })
      .catch((err) => alert("Ocorreu um erro, tente novamente."));
  };

  render() {
    const listaUsuarios = this.state.usuarios.map((user) => {
      return (
        <CardUsuario key={user.id}>
          {user.name} <p onClick={() => this.deletarUsuario(user.id)}>X</p>
        </CardUsuario>
      );
    });

    return (
      <ListaContainer>
        <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
        <h2>Lista de Usuários</h2>
        {listaUsuarios}
      </ListaContainer>
    );
  }
}
