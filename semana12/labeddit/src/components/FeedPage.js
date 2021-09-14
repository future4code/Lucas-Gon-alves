import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import styled from "styled-components";
import { baseUrl } from "../constants";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import PostCard from "./PostCard";

const FeedWrapper = styled.div`
  display: grid;
  gap: 20px;
  justify-items: center;
`;

const FeedPage = () => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newTitlePost, setNewTitlePost] = useState("");
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      history.push("/login");
    }
  }, []);

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
        setPosts(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateTitlePost = (e) => setNewTitlePost(e.target.value);

  const handleUpdatePost = (e) => setNewPost(e.target.value);

  const createNewPost = () => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const body = {
      title: newTitlePost,
      body: newPost,
    };

    axios
      .post(`${baseUrl}/posts`, body, axiosConfig)
      .then((res) => {
        setNewTitlePost("");
        setNewPost("");
        fetchPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createVotePost = (postId, direction) => {
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
        alert("Não foi possível votar na postagem.");
      });
  };

  const deleteVotePost = (postId) => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .delete(`${baseUrl}/posts/${postId}/votes`, axiosConfig)
      .then((res) => {
        fetchPosts();
      })
      .catch((err) => {
        alert("Não foi possível deletar o seu voto.");
      });
  };

  const changeVotePost = (postId, direction) => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const body = {
      direction: direction,
    };

    axios
      .put(`${baseUrl}/posts/${postId}/votes`, body, axiosConfig)
      .then((res) => {
        fetchPosts();
      })
      .catch((err) => {
        alert("Não foi possível alterar o seu voto.");
      });
  };

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <>
      <FeedWrapper>
        <Button color={"primary"} variant={"text"} onClick={logout}>
          Logout
        </Button>

        <TextField
          margin={"normal"}
          variant={"outlined"}
          placeholder={"Escreva o título da sua postagem"}
          value={newTitlePost}
          onChange={handleUpdateTitlePost}
        />
        <TextField
          variant={"outlined"}
          placeholder={"Escreva a sua postagem."}
          value={newPost}
          onChange={handleUpdatePost}
        />
        <Button variant={"outlined"} onClick={createNewPost}>
          Enviar Postagem
        </Button>

        {isLoading && <CircularProgress />}

        {posts &&
          posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              createVotePost={createVotePost}
              deleteVotePost={deleteVotePost}
              changeVotePost={changeVotePost}
            >
              {post.title}
            </PostCard>
          ))}
      </FeedWrapper>
    </>
  );
};

export default FeedPage;
