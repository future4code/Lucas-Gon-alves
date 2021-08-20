import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MatchListItem from "./MatchListItem";

const ListContainer = styled.div`
  padding: 8px;
`;

const MatchListPage = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas-fernandes/matches"
      )
      .then((res) => {
        setMatches(res.data.matches);
        console.log(res.data.matches);
      })
      .catch();
  }, []);

  return (
    <ListContainer>
      {matches.map((profile) => {
        return <MatchListItem profile={profile} />;
      })}
    </ListContainer>
  );
};

export default MatchListPage;
