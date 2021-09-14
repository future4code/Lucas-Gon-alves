import React from "react";
import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const CommentListItem = (props) => {
  const handleUpVote = () => {
    if (props.comment.userVote === -1) {
      props.changeCommentVote(props.comment.id, 1);
    } else if (props.comment.userVote === 1) {
      props.deleteCommentVote(props.comment.id);
    } else {
      props.handleCommentVote(props.comment.id, 1);
    }
  };

  const handleDownVote = () => {
    if (props.comment.userVote === 1) {
      props.changeCommentVote(props.comment.id, -1);
    } else if (props.comment.userVote === -1) {
      props.deleteCommentVote(props.comment.id);
    } else {
      props.handleCommentVote(props.comment.id, -1);
    }
  };

  return (
    <ListItem style={{ width: "300px" }}>
      <ListItemText primary={props.comment.body} secondary={"Fulado de Tal"} />
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={handleUpVote}>
          <ArrowUpwardIcon
            color={props.comment.userVote === 1 ? "secondary" : "disabled"}
          />
        </IconButton>
        <span style={{ marginLeft: "10px" }}>
          {props.comment.voteSum === null ? "0" : props.comment.voteSum}
        </span>
        <IconButton edge="end" onClick={handleDownVote}>
          <ArrowDownwardIcon
            color={props.comment.userVote === -1 ? "primary" : "disabled"}
          />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default CommentListItem;
