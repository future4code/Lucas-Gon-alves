import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import { baseUrl } from "../constants";
import PostCard from "./PostCard";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Typography,
} from "@material-ui/core";
import CommentListItem from "./CommentListItem";

const PostDetailsPage = (props) => {
  const [postDetails, setPostDetails] = useState(null);
  const [newComment, setNewComment] = useState("");
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (!params.postId) {
      history.push("/feed");
    } else if (localStorage.getItem("token") === null) {
      history.push("/login");
    }
  }, []);

  useEffect(() => {
    fecthPostDetails();
  }, []);

  const fecthPostDetails = () => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios
      .get(`${baseUrl}/posts/${params.postId}/comments`, axiosConfig)
      .then((res) => {
        setPostDetails(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateComment = (e) => {
    setNewComment(e.target.value);
  };

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
        fecthPostDetails();
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
        fecthPostDetails();
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
        fecthPostDetails();
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
        fecthPostDetails();
      })
      .catch((err) => {
        alert("Não foi possível apagar o voto no comentário.");
      });
  };

  return (
    <div>
      {postDetails !== null && <PostCard post={postDetails} hideComment />}

      <TextField
        placeholder={"Seu Comentário"}
        value={newComment}
        onChange={handleUpdateComment}
      />

      <Button onClick={handleCreateComment}>Enviar Comentário</Button>

      <List>
        {postDetails &&
          postDetails.map((comment) => (
            <CommentListItem
              comment={comment}
              handleCommentVote={handleCommentVote}
              changeCommentVote={changeCommentVote}
              deleteCommentVote={deleteCommentVote}
            />
          ))}
      </List>
    </div>
  );
};

export default PostDetailsPage;
