import styled from "styled-components";
import { useHistory } from "react-router";

const HomePageContainer = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => {
  const history = useHistory();

  return (
    <HomePageContainer>
      <h1>LabeX</h1>
      <p>Explorando Novos Mundo</p>
      <div>
        <button onClick={() => history.push("/list/trips")}>
          Lista de Viagens
        </button>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
