import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const LoginPageContainer = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin-bottom: 1rem;
  }
`;

const LoginPage = () => {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onSubmitLogin = () => {
    console.log(userEmail, userPassword);
    const body = {
      email: userEmail,
      password: userPassword,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login",
        body
      )
      .then((response) => {
        console.log("Deu certo: ", response.data.token);
        localStorage.setItem("token", response.data.token);
        history.push("/admin/trips/list");
      })
      .catch((error) => {
        console.log("Deu errado: ", error.response);
      });
  };

  return (
    <LoginPageContainer>
      <h1>Login</h1>
      <FormContainer>
        <input
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          type="text"
          placeholder="E-mail"
        />
        <input
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          type="password"
          placeholder="Senha"
        />
        <button onClick={onSubmitLogin}>Entrar</button>
      </FormContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
