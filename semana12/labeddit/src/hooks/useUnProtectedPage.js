import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToPostList } from "../routes/coordinator";

const useUnprotectedPage = () => {
  const history = useHistory();
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToPostList(history);
    }
  }, [history]);
};

export default useUnprotectedPage;
