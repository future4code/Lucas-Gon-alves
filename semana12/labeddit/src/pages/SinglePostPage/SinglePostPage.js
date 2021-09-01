import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const SinglePostPage = () => {
  useProtectedPage();
  return <div>SinglePostPage</div>;
};

export default SinglePostPage;
