import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { baseUrl } from "../constants";
import axios from "axios";
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
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router";

const HeaderCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      history.push("/");
    }
  }, []);

  const handleGoToSignup = () => {
    history.push("/signup");
  };

  const handleUpdateEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handleUpdatePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${baseUrl}/users/login`, body);

      localStorage.setItem("token", response.data.token);

      history.push("/");
    } catch (error) {
      alert("Erro ao logar :(");
      console.error(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <HeaderCenter>
          <Avatar style={{ backgroundColor: "transparent" }}>
            <ExitToAppIcon color={"primary"} fontSize={"large"} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Logar
          </Typography>
        </HeaderCenter>
        <form onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            value={email}
            onChange={handleUpdateEmail}
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
            onChange={handleUpdatePassword}
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button type="submit" fullWidth variant="contained" color="primary">
            Logar
          </Button>
          <Grid container>
            <Grid item>
              <Link onClick={handleGoToSignup} variant="body2">
                {"Não possui conta? Cadastre-se"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
