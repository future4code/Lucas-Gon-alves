import axios from "axios";
import React from "react";
import styled from "styled-components";

const CadastroContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  button {
    padding: 4px;
    font-size: 0.9rem;
    display: inline-block;
    max-width: 150px;
    margin: 1rem auto;
  }

  input {
    padding: 8px 12px;
    margin-bottom: 8px;
    border: none;
    border-bottom: 1px solid black;
    font-size: 1rem;
  }
`;

export default class TelaCadastro extends React.Component {
  state = {
    name: "",
    email: "",
  };

  handleName = (e) => this.setState({ name: e.target.value });

  handleEmail = (e) => this.setState({ email: e.target.value });

  fazerCadastro = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.name,
      email: this.state.email,
    };

    axios
      .post(url, body, {
        headers: {
          Authorization: "lucas-fernandes-lovelace",
        },
      })
      .then((res) => {
        alert("Usuário Cadastrado com Sucesso");
        this.setState({ name: "", email: "" });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    return (
      <CadastroContainer>
        <button onClick={this.props.irParaLista}>
          Ir para a Lista de Usuários
        </button>
        <h2>Cadastro</h2>
        <input
          placeholder={"Nome"}
          value={this.state.name}
          onChange={this.handleName}
        />
        <input
          placeholder={"E-mail"}
          value={this.state.email}
          onChange={this.handleEmail}
        />
        <button onClick={this.fazerCadastro}>Cadastrar</button>
      </CadastroContainer>
    );
  }
}
