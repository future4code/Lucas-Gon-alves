import {
  Button,
  CircularProgress,
  Divider,
  List,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import { baseUrl } from "../constants";
import CommentListItem from "./CommentListItem";

const ListWrapper = styled.div`
  display: grid;
  gap: 20px;
  justify-items: center;
`;

const PostDetailsPage = () => {
  const [postDetails, setPostDetails] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (!params.postId) {
      history.push("/");
    } else if (localStorage.getItem("token") === null) {
      history.push("/login");
    }
  }, []);

  useEffect(() => {
    fetchPostDetail();
  }, []);

  const fetchPostDetail = () => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    setIsLoading(true);
    axios
      .get(`${baseUrl}/posts/${params.postId}/comments`, axiosConfig)
      .then((res) => {
        setPostDetails(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateComment = (e) => setNewComment(e.target.value);

  const handleCreateComment = () => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const body = {
      body: newComment,
    };

    axios
      .post(`${baseUrl}/posts/${params.postId}/comments`, body, axiosConfig)
      .then((res) => {
        setNewComment("");
        fetchPostDetail();
      })
      .catch((err) => {
        alert("Não foi possível comentar.");
        console.log(err);
      });
  };

  const handleCommentVote = (commentId, direction) => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const body = {
      direction: direction,
    };

    axios
      .post(`${baseUrl}/comments/${commentId}/votes`, body, axiosConfig)
      .then((res) => {
        fetchPostDetail();
      })
      .catch((err) => {
        alert("Não foi possível votar no comentário");
      });
  };

  const changeCommentVote = (commentId, direction) => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const body = {
      direction: direction,
    };

    axios
      .put(`${baseUrl}/comments/${commentId}/votes`, body, axiosConfig)
      .then((res) => {
        fetchPostDetail();
      })
      .catch((err) => {
        alert("Não foi possível alterar o voto no comentário");
      });
  };

  const deleteCommentVote = (commentId) => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios
      .delete(`${baseUrl}/comments/${commentId}/votes`, axiosConfig)
      .then((res) => {
        fetchPostDetail();
      })
      .catch((err) => {
        alert("Não foi possível apagar o voto no comentário.");
      });
  };

  return (
    <ListWrapper>
      <Button
        color={"primary"}
        variant={"text"}
        onClick={() => history.goBack()}
      >
        Voltar
      </Button>

      <TextField
        margin={"dense"}
        variant={"outlined"}
        placeholder={"Seu Comentário"}
        value={newComment}
        onChange={handleUpdateComment}
      />

      <Button variant={"outlined"} onClick={handleCreateComment}>
        Enviar Comentário
      </Button>

      <Divider />

      <List>
        {isLoading && <CircularProgress />}
        {postDetails &&
          postDetails.map((comment) => (
            <CommentListItem
              key={comment.id}
              comment={comment}
              handleCommentVote={handleCommentVote}
              changeCommentVote={changeCommentVote}
              deleteCommentVote={deleteCommentVote}
            />
          ))}
      </List>
    </ListWrapper>
  );
};

export default PostDetailsPage;
