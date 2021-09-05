import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { baseUrl } from "../constants";
import FeedPage from "./FeedPage";
import LoginPage from "./LoginPage";
import PostDetailsPage from "./PostDetailsPage";
import SignupPage from "./SignupPage";

const Router = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    setIsLoading(true);
    axios
      .get(`${baseUrl}/posts`, axiosConfig)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact path={"/signup"}>
          <SignupPage />
        </Route>
        <Route exact path={"/feed"}>
          <FeedPage
            fetchPosts={fetchPosts}
            isLoading={isLoading}
            posts={posts}
          />
        </Route>
        <Route exact path={"/post/:postId"}>
          <PostDetailsPage posts={posts} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
