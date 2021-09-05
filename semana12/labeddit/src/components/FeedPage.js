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

const FeedPage = ({ isLoading, posts, fetchPosts }) => {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      history.push("/login");
    }
  }, []);

  const createPostVote = (postId, direction) => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const body = {
      direction: direction,
    };

    axios
      .post(`${baseUrl}/posts/${postId}/votes`, body, axiosConfig)
      .then((res) => {
        fetchPosts();
      })
      .catch((err) => {
        alert("Não foi possível votar em uma postagem");
      });
  };

  return (
    <FeedWrapper>
      {isLoading && <CircularProgress />}
      {posts &&
        posts.map((post) => (
          <PostCard key={post.id} post={post} createPostVote={createPostVote} />
        ))}
    </FeedWrapper>
  );
};

export default FeedPage;
