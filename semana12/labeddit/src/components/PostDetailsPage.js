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
  }, []);

  const handleUpdateComment = (e) => {
    setNewComment(e.target.value);
  };

  const handleCreateComment = () => {};

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
          postDetails.map((comment) => <CommentListItem comment={comment} />)}
      </List>
    </div>
  );
};

export default PostDetailsPage;
