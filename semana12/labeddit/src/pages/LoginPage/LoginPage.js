import React from "react";
import { ScreenContainer, SignUpButtonContainer } from "./styled";
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router";
import { goToSignUp } from "../../routes/coordinator";
import useUnprotectedPage from "../../hooks/useUnProtectedPage";

const LoginPage = ({ setRightButtonText }) => {
  useUnprotectedPage();
  const history = useHistory();
  return (
    <ScreenContainer>
      <LoginForm setRightButtonText={setRightButtonText} />
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
