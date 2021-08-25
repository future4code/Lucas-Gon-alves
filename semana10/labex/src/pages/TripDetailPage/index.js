import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import CandidatesList from "./CandidatesList";
import TripInfoCard from "./TripInfoCard";
import { ContentContainer } from "./styled";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const TripDetailPage = () => {
  const [trip, setTrip] = useState();
  const params = useParams();

  useProtectedPage();

  const getTripDetail = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-fernandes/trip/${params.tripId}`,
        {
          headers: {
            auth: window.localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setTrip(res.data.trip);
      });
  };

  useEffect(() => {
    getTripDetail();
  }, []);

  const decideCandidate = (approve, candidateId) => {
    const body = {
      approve: approve,
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-fernandes/trips/${params.tripId}/candidates/${candidateId}/decide`,
        body,
        { headers: { auth: window.localStorage.getItem("token") } }
      )
      .then(() => {
        getTripDetail();
      });
  };

  return (
    <div>
      <PageTitle title={"Detalhes da Viagem"} />
      {trip ? (
        <ContentContainer>
          <TripInfoCard infoTrip={trip} />
          <CandidatesList
            candidates={trip.candidates}
            tripId={params.tripId}
            decideCandidate={decideCandidate}
          />
        </ContentContainer>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
};

export default TripDetailPage;
