import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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
  const tripId = localStorage.getItem("id");
  const history = useHistory();
  const [approved, setApproved] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [days, setDays] = useState("");
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("");

  console.log(candidates);

  useEffect(() => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-fernandes/trip/${tripId}`,
        {
          headers: {
            auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkQ0UFZCdm8yRHVoTDJhOEx5STExIiwiZW1haWwiOiJkZXZ6aXRvQGdtYWlsLmNvbSIsImlhdCI6MTYyOTMyNDUzOH0.-KaVcj6vCGIjBMhoojZbPckGhIPNJCGfl2fz8zZS878",
          },
        }
      )
      .then((res) => {
        const trip = res.data.trip;
        setApproved(trip.approved);
        setCandidates(trip.candidates);
        setDate(trip.date);
        setDesc(trip.description);
        setDays(trip.durationInDays);
        setName(trip.name);
        setPlanet(trip.planet);
      })
      .catch((err) => console.log(err));
  }, [tripId]);

  return (
    <GridContainer>
      <TripDetailsContainer>
        <h1>Detalhes da Viagem</h1>
        <div>
          <p>
            <b>Nome: </b>
            {name}
          </p>
          <p>
            <b>Descrição: </b>
            {desc}
          </p>
          <p>
            <b>Planeta: </b>
            {planet}
          </p>
          <p>
            <b>Duração: </b>
            {days}
          </p>
          <p>
            <b>Date</b>
            {date}
          </p>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("id");
            history.goBack();
          }}
        >
          Voltar
        </button>
      </TripDetailsContainer>
      <CandidatesContainer>
        <h2>Candidatos Pendentes</h2>
        {candidates.map((candidate, index) => {
          return (
            <div key={index}>
              <p>
                <b>Nome: </b>
                {candidate.name}
              </p>
              <p>
                <b>Profissão: </b>
                {candidate.profession}
              </p>
              <p>
                <b>Idade: </b>
                {candidate.age}
              </p>
              <p>
                <b>País: </b>
                {candidate.country}
              </p>
              <p>
                <b>Texto de Candidatura: </b>
                {candidate.applicationText}
              </p>
              <button>Sim</button>
              <button>Não</button>
            </div>
          );
        })}

        <h2>Candidatos Aprovados</h2>
        <div>
          {approved.map((approv, index) => {
            return (
              <div key={index}>
                <p>{approv.name}</p>
                <button>Remover</button>;
              </div>
            );
          })}
        </div>
      </CandidatesContainer>
    </GridContainer>
  );
};

export default TripDetailsPage;
