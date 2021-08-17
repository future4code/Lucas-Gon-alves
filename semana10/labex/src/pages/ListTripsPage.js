import { useHistory } from "react-router";
import styled from "styled-components";

const ListTripsPageContainer = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ListTripsPage = () => {
  const history = useHistory();

  return (
    <ListTripsPageContainer>
      <h1>Lista de Viagens</h1>
      <button onClick={() => history.push("/trips/application")}>
        Inscreva-se
      </button>
      <GridContainer>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </GridContainer>
    </ListTripsPageContainer>
  );
};

export default ListTripsPage;
