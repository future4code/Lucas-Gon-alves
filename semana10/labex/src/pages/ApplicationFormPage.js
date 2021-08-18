import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import useGetAllTrips from "../hooks/useGetAllTrips";

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
  const tripList = useGetAllTrips();

  const [tripName, setTripName] = useState("");
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userDesc, setUserDesc] = useState("");
  const [userJob, setUserJob] = useState("");
  const [userCountry, setUserCountry] = useState("");

  const sendApplicationForm = (e) => {
    e.preventDefault();

    setTripName("");
    setUserName("");
    setUserAge("");
    setUserDesc("");
    setUserJob("");
    setUserCountry("");

    // alert("Obrigado por se inscrever!");
    // history.push("/list/trips");
  };

  return (
    <ApplicationFormPageContainer>
      <h1>Inscreva-se para uma viagem</h1>
      <FormContainer onSubmit={sendApplicationForm}>
        <select value={tripName} onChange={(e) => setTripName(e.target.value)}>
          <option value="" disabled>
            Selecione uma Viagem
          </option>
          {tripList.map((trip, index) => {
            return (
              <option key={index} value={trip.id}>
                {trip.name}
              </option>
            );
          })}
        </select>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Nome"
        />
        <input
          value={userAge}
          onChange={(e) => setUserAge(e.target.value)}
          type="number"
          placeholder="Idade"
          min="18"
        />
        <input
          value={userDesc}
          onChange={(e) => setUserDesc(e.target.value)}
          type="text"
          placeholder="Texto de Candidatura"
        />
        <input
          value={userJob}
          onChange={(e) => setUserJob(e.target.value)}
          type="text"
          placeholder="Profissão"
        />
        <select
          value={userCountry}
          onChange={(e) => setUserCountry(e.target.value)}
        >
          <option value="" disabled>
            Selecione seu país
          </option>
          <option value="brasil">Brasil</option>
          <option value="china">China</option>
          <option value="usa">Estados Unidos</option>
        </select>

        <div>
          <button onClick={() => history.goBack()}>Voltar</button>
          <button onClick={sendApplicationForm}>Enviar</button>
        </div>
      </FormContainer>
    </ApplicationFormPageContainer>
  );
};

export default ApplicationFormPage;
