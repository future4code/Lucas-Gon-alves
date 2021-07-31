import React from "react";
import styled from "styled-components";
import axios from "axios";

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

const CardPlaylist = styled.div`
  border-bottom: 1px solid black;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    cursor: pointer;
  }
`;

export default class TelaLista extends React.Component {
  state = {
    input: "",
    playlists: [],
  };

  componentDidMount() {
    this.pegarPlaylist();
  }

  pegarPlaylist = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        { headers: { Authorization: "lucas-fernandes" } }
      )
      .then((res) => this.setState({ playlists: res.data.result.list }))
      .catch((err) => console.log(err));
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
        this.pegarPlaylist();
      })
      .catch((err) => console.log("Erro"));
  };

  removerPlaylist = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        { headers: { Authorization: "lucas-fernandes" } }
      )
      .then((res) => {
        alert("Playlist removida com sucesso");
        this.pegarPlaylist();
      })
      .catch((err) => alert("Deu ruim, mané."));
  };

  render() {
    const listaPlaylists = this.state.playlists.map((play) => {
      return (
        <CardPlaylist key={play.id}>
          {play.name}
          <span onClick={() => this.removerPlaylist(play.id)}>
            <i class="fas fa-trash-alt"></i>
          </span>
        </CardPlaylist>
      );
    });
    return (
      <ListaContainer>
        <h2>Adicionar uma Playlist:</h2>
        <input value={this.state.input} onChange={this.handleInput} />
        <button onClick={this.adicionarPlaylist}>Adicionar</button>
        {listaPlaylists}
      </ListaContainer>
    );
  }
}
