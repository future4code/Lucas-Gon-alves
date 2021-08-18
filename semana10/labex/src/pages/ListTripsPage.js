import { useHistory } from "react-router";
import styled from "styled-components";
import useGetAllTrips from "../hooks/useGetAllTrips";

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
  const tripList = useGetAllTrips();

  return (
    <ListTripsPageContainer>
      <h1>Lista de Viagens</h1>
      <button onClick={() => history.push("/trips/application")}>
        Inscreva-se
      </button>
      <GridContainer>
        {tripList.map((trip, index) => {
          return (
            <div key={index}>
              <p>
                <b>Nome: </b>
                {trip.name}
              </p>
              <p>
                <b>Descrição: </b>
                {trip.description}
              </p>
              <p>
                <b>Planeta: </b>
                {trip.planet}
              </p>
              <p>
                <b>Duração: </b>
                {trip.durationInDays}
              </p>
              <p>
                <b>Data: </b>
                {trip.date}
              </p>
            </div>
          );
        })}
      </GridContainer>
    </ListTripsPageContainer>
  );
};

export default ListTripsPage;
