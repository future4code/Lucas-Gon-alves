import { useHistory } from "react-router";
import useGetAllTrips from "../hooks/useGetAllTrips";
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
  const tripList = useGetAllTrips();

  const createTrip = () => history.push("/admin/trips/create");

  const doLogout = () => {
    // Lógica do logout e endirecionamento para página de login.
    localStorage.removeItem("token");
    history.replace("/login");
  };

  return (
    <AdmingHomePageContainer>
      <h1>Painel Administrativo</h1>
      <div>
        <button onClick={createTrip}>Criar Viagem</button>
        <button onClick={doLogout}>Logout</button>
      </div>
      <GridContainer>
        {tripList.map((trip, index) => {
          return (
            <div
              style={{ border: "1px solid black" }}
              key={index}
              id={trip.id}
              onClick={() => history.push(`/admin/trips/${trip.id}`)}
            >
              <p>{trip.name}</p> <span>X</span>
            </div>
          );
        })}
      </GridContainer>
    </AdmingHomePageContainer>
  );
};

export default AdminHomePage;
