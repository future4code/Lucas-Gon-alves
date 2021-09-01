import React from "react";
import { ScreenContainer, SignUpButtonContainer } from "./styled";
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router";
import { goToSignUp } from "../../routes/coordinator";

const LoginPage = () => {
  const history = useHistory();
  return (
    <ScreenContainer>
      <LoginForm />
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUp(history)}
          type={"submit"}
          fullWidth
          variant={"outlined"}
          color={"primary"}
        >
          Cadastrar-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
