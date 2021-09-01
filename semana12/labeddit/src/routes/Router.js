import React from "react";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import PostListPage from "../pages/PostListPage/PostListPage";
import SinglePostPage from "../pages/SinglePostPage/SinglePostPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/cadastro">
          <SignUpPage />
        </Route>
        <Route exact path="/">
          <PostListPage />
        </Route>
        <Route exact path="/detalhe/:id">
          <SinglePostPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
