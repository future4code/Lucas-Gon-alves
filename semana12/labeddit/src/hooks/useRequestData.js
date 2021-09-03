import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const useRequestData = (initialData, url) => {
  const [data, setdata] = useState(initialData);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, [url]);

  return data;
};

export default useRequestData;
