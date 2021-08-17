import { useHistory } from "react-router";
import styled from "styled-components";

const ApplicationFormPageContainer = styled.div`
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

const ApplicationFormPage = () => {
  const history = useHistory();
  const sendApplicationForm = () => {
    // Lógica de envio do formulário e depois endireciona para a lista de viagens.
    alert("Obrigado por se inscrever!");
    history.push("/list/trips");
  };
  return (
    <ApplicationFormPageContainer>
      <h1>Inscreva-se para uma viagem</h1>
      <FormContainer>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button onClick={() => history.goBack()}>Voltar</button>
        <button onClick={sendApplicationForm}>Enviar</button>
      </FormContainer>
    </ApplicationFormPageContainer>
  );
};

export default ApplicationFormPage;
