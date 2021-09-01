import React from "react";
import { ScreenContainer } from "./styled";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnProtectedPage";

const SignUpPage = () => {
  useUnprotectedPage();
  return (
    <ScreenContainer>
      <SignUpForm />
    </ScreenContainer>
  );
};

export default SignUpPage;
