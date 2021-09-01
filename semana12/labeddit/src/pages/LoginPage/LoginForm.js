import React from "react";
import { InputsContainer, LoginFormContainer } from "./styled";
import { Button, TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { login } from "../../services/user";
import { useHistory } from "react-router-dom";

const LoginForm = ({ setRightButtonText }) => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory();

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(form, clear, history, setRightButtonText);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <LoginFormContainer>
        <InputsContainer>
          <TextField
            value={form.email}
            name={"email"}
            onChange={onChange}
            label={"E-mail"}
            varitant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
            type={"email"}
          />
          <TextField
            value={form.password}
            name={"password"}
            onChange={onChange}
            label={"Senha"}
            varitant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
            type={"password"}
          />
        </InputsContainer>
        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
        >
          Login
        </Button>
      </LoginFormContainer>
    </form>
  );
};

export default LoginForm;
