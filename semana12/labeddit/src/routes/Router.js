import React from "react";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import PostListPage from "../pages/PostListPage/PostListPage";
import SinglePostPage from "../pages/SinglePostPage/SinglePostPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { Switch, Route } from "react-router-dom";

const Router = ({ setRightButtonText }) => {
  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage setRightButtonText={setRightButtonText} />
      </Route>
      <Route exact path="/cadastro">
        <SignUpPage setRightButtonText={setRightButtonText} />
      </Route>
      <Route exact path="/">
        <PostListPage />
      </Route>
      <Route exact path="/detalhe/:id">
        <SinglePostPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Router;
