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
  const sendLogin = () => {
    // Lógica do envio do login e senha e direcionamento para a página de administrador.
    history.push("/admin/trips/list");
  };

  return (
    <LoginPageContainer>
      <h1>Login</h1>
      <FormContainer>
        <input type="text" />
        <input type="text" />
        <button onClick={sendLogin}>Entrar</button>
      </FormContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
