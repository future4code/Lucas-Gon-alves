import { useForm } from "../../hooks/useForm";
import { Button, TextField } from "@material-ui/core";
import PageTitle from "../../components/PageTitle";

import { LoginForm, ButtonContainer } from "./styled";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  const [form, onChangeInput] = useForm({
    email: "",
    password: "",
  });

  const onSubmitLogin = (e) => {
    e.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-fernandes/login",
        body
      )
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        history.push("/viagens");
      });
  };

  return (
    <div>
      <PageTitle title={"Login"} />
      <LoginForm onSubmit={onSubmitLogin}>
        <TextField
          label={"Email"}
          type={"email"}
          value={form["email"]}
          onChange={onChangeInput}
          name={"email"}
        />
        <TextField
          label={"Senha"}
          type={"password"}
          value={form["password"]}
          onChange={onChangeInput}
          name={"password"}
        />
        <ButtonContainer>
          <Button
            variant={"outlined"}
            color={"primary"}
            onClick={() => history.goBack()}
          >
            Voltar
          </Button>
          <Button variant={"outlined"} color={"primary"} type={"submit"}>
            Entrar
          </Button>
        </ButtonContainer>
      </LoginForm>
    </div>
  );
};

export default LoginPage;
