import { useHistory } from "react-router";
import styled from "styled-components";

const CreateTripPageContainer = styled.div`
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

const CreateTripPage = () => {
  const history = useHistory();
  const sendCreateTrip = () => {
    // Lógica de criar uma viagem e direcionar para a página de adm.
    alert("Viagem Criada com Sucesso");
    history.push("/admin/trips/list");
  };
  return (
    <CreateTripPageContainer>
      <h1>Criar Viagem</h1>
      <FormContainer>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button onClick={sendCreateTrip}>Criar</button>
      </FormContainer>
    </CreateTripPageContainer>
  );
};

export default CreateTripPage;
