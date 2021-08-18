import axios from "axios";
import { useState, useEffect } from "react";

const useGetAllTrips = () => {
  const [tripList, setTripList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-fernandes/trips"
      )
      .then((response) => {
        setTripList(response.data.trips);
      })
      .catch((error) => console.log(error.response));
  }, []);

  return tripList;
};

export default useGetAllTrips;
