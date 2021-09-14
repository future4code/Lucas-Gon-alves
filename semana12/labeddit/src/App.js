import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import FeedPage from "./components/FeedPage";
import PostDetailsPage from "./components/PostDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact path={"/signup"}>
          <SignupPage />
        </Route>
        <Route exact path={"/"}>
          <FeedPage />
        </Route>
        <Route exact path={"/post/:postId"}>
          <PostDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
