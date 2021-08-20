import axios from "axios";
import { useState } from "react";
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
  const token = localStorage.getItem("token");
  const planets = [
    "Mercúrio",
    "Vênus",
    "Terra",
    "Marte",
    "Júpiter",
    "Saturno",
    "Urano",
    "Netuno",
    "Titã",
  ];
  const [tripName, setTripName] = useState("");
  const [tripPlanet, setTripPlanet] = useState("");
  const [tripDate, setTripDate] = useState("");
  const [tripDesc, setTripDesc] = useState("");
  const [tripDays, setTripDays] = useState("");
  const history = useHistory();

  const sendCreateTrip = () => {
    const body = {
      name: tripName,
      planet: tripPlanet,
      date: tripDate,
      description: tripDesc,
      durationInDays: tripDays,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-fernandes/trips",
        body
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // alert("Viagem Criada com Sucesso");
    // history.push("/admin/trips/list");
  };

  return (
    <CreateTripPageContainer>
      <h1>Criar Viagem</h1>
      <FormContainer>
        <input
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
          type="text"
          placeholder="Nome"
        />
        <select
          value={tripPlanet}
          onChange={(e) => setTripPlanet(e.target.value)}
        >
          <option disabled value="">
            Selecione um planeta
          </option>
          {planets.map((planet, index) => {
            return (
              <option key={index} value={index}>
                {planet}
              </option>
            );
          })}
        </select>
        <input
          value={tripDate}
          onChange={(e) => setTripDate(e.target.value)}
          type="date"
        />
        <input
          value={tripDesc}
          onChange={(e) => setTripDesc(e.target.value)}
          type="text"
          placeholder="Descrição"
        />
        <input
          value={tripDays}
          onChange={(e) => setTripDays(e.target.value)}
          type="number"
          placeholder="Duração em dias"
          min="50"
        />
        <div>
          <button onClick={sendCreateTrip}>Criar</button>
          <button onClick={() => history.goBack()}>Voltar</button>
        </div>
      </FormContainer>
    </CreateTripPageContainer>
  );
};

export default CreateTripPage;

// Perguntar sobre como criar a requisição para criar uma viagem.
