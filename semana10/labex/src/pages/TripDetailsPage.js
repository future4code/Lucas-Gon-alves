import { useHistory } from "react-router-dom";

import styled from "styled-components";

const GridContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const TripDetailsContainer = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 5px solid black;
  height: calc(100vh - 80.625px);
`;
const CandidatesContainer = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TripDetailsPage = () => {
  const history = useHistory();

  return (
    <GridContainer>
      <TripDetailsContainer>
        <h1>Detalhes da Viagem</h1>
        <div>CARD DE DEALHES</div>
        <button onClick={() => history.goBack()}>Voltar</button>
      </TripDetailsContainer>
      <CandidatesContainer>
        <h2>Candidatos Pendentes</h2>
        <div>
          CARD DO CANDIDATO PENDENTE
          <button>Sim</button>
          <button>Não</button>
        </div>
        <div>
          CARD DO CANDIDATO PENDENTE
          <button>Sim</button>
          <button>Não</button>
        </div>
        <h2>Candidatos Aprovados</h2>
        <div>
          CARD DO CANDIDATO APROVADO
          <button>Remover</button>
        </div>
      </CandidatesContainer>
    </GridContainer>
  );
};

export default TripDetailsPage;
