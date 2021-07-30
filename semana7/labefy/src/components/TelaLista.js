import React from "react";
import styled from "styled-components";
import axios from "axios";

const ListaContainer = styled.div`
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

export default class TelaLista extends React.Component {
  state = {
    input: "",
    playlists: [],
  };

  handleInput = (e) => this.setState({ input: e.target.value });

  adicionarPlaylist = () => {
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        { id: Date.now(), name: this.state.input },
        { headers: { Authorization: "lucas-fernandes" } }
      )
      .then((res) => {
        alert("Playlist Adicionada com Sucesso");
        this.setState({ input: "" });
      })
      .catch((err) => console.log("Erro"));
  };

  render() {
    return (
      <ListaContainer>
        <h2>Adicionar uma Playlist:</h2>
        <input value={this.state.input} onChange={this.handleInput} />
        <button onClick={this.adicionarPlaylist}>Adicionar</button>
      </ListaContainer>
    );
  }
}
