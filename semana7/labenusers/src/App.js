import React from "react";
import styled from "styled-components";
import Registro from "./Registro";
import Lista from "./Lista";
import axios from "axios";

const AppContainer = styled.div`
  box-sizing: border-box;
  padding: 16px;
  border: 1px solid black;
`;

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "lucas-fernandes-lovelace",
  },
};

export default class App extends React.Component {
  state = {
    nameList: [],
    name: "",
    email: "",
    page: true,
  };

  componentDidMount() {
    this.getNameList();
  }

  renderizaTelaCorreta = () => {
    if (this.state.page) {
      return (
        <Registro
          name={this.state.name}
          email={this.state.email}
          onChangeName={this.onChangeName}
          onChangeEmail={this.onChangeEmail}
          onAddNameToList={this.onAddNameToList}
          goToList={this.goToList}
        />
      );
    } else {
      return (
        <Lista
          nameList={this.state.nameList}
          onRemoveNameList={this.onRemoveNameList}
          goToReg={this.goToReg}
        />
      );
    }
  };

  goToList = () => {
    this.setState({
      page: false,
    });
  };

  goToReg = () => {
    this.setState({
      page: true,
    });
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  getNameList = () => {
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ nameList: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  onAddNameToList = () => {
    const body = {
      name: this.state.name,
      email: this.state.email,
    };
    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Nome add a lista!");
        this.setState({ name: "", email: "" });
        this.getNameList();
      })
      .catch((err) => {
        alert(err);
      });

    // const newName = {
    //   id: Date.now(),
    //   name: this.state.name,
    // };
    // const newNameList = [...this.state.nameList, newName];
    // this.setState({ nameList: newNameList, name: "" });
  };

  onRemoveNameList = (nameId) => {
    // const newNameList = [...this.state.nameList].filter(
    //   (user) => user.name !== nameToRemove
    // );
    // this.setState({
    //   nameList: newNameList,
    // });
  };

  render() {
    return <AppContainer>{this.renderizaTelaCorreta()}</AppContainer>;
  }
}
