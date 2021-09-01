import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const PostListPage = () => {
  useProtectedPage();
  return <div>PostListPage</div>;
};

export default PostListPage;
