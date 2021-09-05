import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router";
import { baseUrl } from "../constants";
import PostCard from "./PostCard";

const FeedWrapper = styled.div`
  display: grid;
  gap: 20px;
  justify-items: center;
`;

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      history.push("/login");
    }
  }, []);

  useEffect(() => {
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
  }, []);

  return (
    <FeedWrapper>
      {isLoading && <CircularProgress />}
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </FeedWrapper>
  );
};

export default FeedPage;
