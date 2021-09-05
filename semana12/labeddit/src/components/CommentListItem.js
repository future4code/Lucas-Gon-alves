import React from "react";
import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const CommentListItem = ({
  comment,
  handleCommentVote,
  changeCommentVote,
  deleteCommentVote,
}) => {
  const handleUpVote = () => {
    if (comment.userVote === -1) {
      changeCommentVote(comment.id, 1);
    } else if (comment.userVote === 1) {
      deleteCommentVote(comment.id);
    } else {
      handleCommentVote(comment.id, 1);
    }
  };

  const handleDownVote = () => {
    if (comment.userVote === 1) {
      changeCommentVote(comment.id, -1);
    } else if (comment.userVote === -1) {
      deleteCommentVote(comment.id);
    } else {
      handleCommentVote(comment.id, -1);
    }
  };

  return (
    <ListItem>
      <ListItemText primary={"Fulado de Tal"} secondary={comment.body} />
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={handleUpVote}>
          <ArrowUpwardIcon
            color={comment.userVote === 1 ? "secondary" : "disabled"}
          />
        </IconButton>
        <span>{comment.voteSum === null ? "0" : comment.voteSum}</span>
        <IconButton edge="end" onClick={handleDownVote}>
          <ArrowDownwardIcon
            color={comment.userVote === -1 ? "primary" : "disabled"}
          />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default CommentListItem;
