import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import { InputsContainer, SignUpFormContainer } from "./styled";

const SignUpForm = ({ setRightButtonText }) => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(form);
    signUp(form, clear, history, setRightButtonText);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.name}
            name={"name"}
            onChange={onChange}
            label={"Nome"}
            varitant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />
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
            label={"Senha - Apenas Números"}
            varitant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
            type={"password"}
          />
        </InputsContainer>
        <Button
          color={"primary"}
          variant={"contained"}
          type={"submit"}
          fullWidth
        >
          Fazer Cadastro
        </Button>
      </SignUpFormContainer>
    </form>
  );
};

export default SignUpForm;
