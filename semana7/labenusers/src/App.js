import React from "react";
import styled from "styled-components";
import Registro from "./Registro";
import Lista from "./Lista";
// import axios from "axios";

const AppContainer = styled.div`
  box-sizing: border-box;
  padding: 16px;
  border: 1px solid black;
`;

const users = [
  {
    id: "1",
    name: "Romel",
  },
  {
    id: "2",
    name: "Rock",
  },
  {
    id: "3",
    name: "Luc0s",
  },
  {
    id: "4",
    name: "Leon",
  },
];

export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Registro
        // name={this.state.name}
        // onChangeName={this.onChangeName}
        // criarUser={this.criarUser}
        />
        <Lista users={users} />
      </AppContainer>
    );
  }
}
