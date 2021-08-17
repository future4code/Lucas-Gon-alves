import { useHistory } from "react-router";
import styled from "styled-components";

const AdmingHomePageContainer = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridContainer = styled.div`
  margin: 50px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

const AdminHomePage = () => {
  const history = useHistory();

  const createTrip = () => history.push("/admin/trips/create");
  const doLogout = () => {
    // Lógica do logout e endirecionamento para página de login.
    history.replace("/login");
  };
  const checkDetails = () => {
    history.push(`/admin/trips/:id`);
  };

  return (
    <AdmingHomePageContainer>
      <h1>Painel Administrativo</h1>
      <div>
        <button onClick={createTrip}>Criar Viagem</button>
        <button onClick={doLogout}>Logout</button>
      </div>
      <GridContainer>
        <div id="1" onClick={checkDetails}>
          A
        </div>
        <div onClick={checkDetails}>B</div>
        <div onClick={checkDetails}>C</div>
      </GridContainer>
    </AdmingHomePageContainer>
  );
};

export default AdminHomePage;
