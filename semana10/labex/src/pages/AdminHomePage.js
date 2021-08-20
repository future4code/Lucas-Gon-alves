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

const CardContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  span {
    padding: 1rem 0 1rem 1rem;
    font-weight: bolder;
    :hover {
      color: red;
    }
  }
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
          const sendToTripDetails = () => {
            localStorage.setItem("id", trip.id);
            history.push(`/admin/trips/${trip.id}`);
          };
          return (
            <CardContainer
              style={{ border: "1px solid black" }}
              key={index}
              id={trip.id}
            >
              <p onClick={sendToTripDetails}>{trip.name}</p> <span>X</span>
            </CardContainer>
          );
        })}
      </GridContainer>
    </AdmingHomePageContainer>
  );
};

export default AdminHomePage;
