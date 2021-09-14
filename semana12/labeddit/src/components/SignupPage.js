import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { baseUrl } from "../constants";
import axios from "axios";
import FaceIcon from "@material-ui/icons/Face";
import styled from "styled-components";

const HeaderCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      history.push("/");
    }
  }, []);

  const handleGoToLogin = () => {
    history.push("/login");
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSignup = (e) => {
    e.preventDefault();

    const body = {
      username: username,
      email: email,
      password: password,
    };

    console.log(body);

    axios
      .post(`${baseUrl}/users/signup`, body)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        history.push("/");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <HeaderCenter>
          <Avatar style={{ backgroundColor: "transparent" }} variant={"circle"}>
            <FaceIcon color={"primary"} fontSize={"large"} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastrar
          </Typography>
        </HeaderCenter>
        <form onSubmit={handleSignup}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nome do Usuário"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={password}
            onChange={handlePasswordChange}
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button type="submit" fullWidth variant="contained" color="primary">
            Cadastrar
          </Button>
          <Grid container>
            <Grid item>
              <Link onClick={handleGoToLogin} variant="body2">
                {"Já possui conta? Logue-se"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignupPage;
