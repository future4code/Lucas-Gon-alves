import React from "react";
import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const CommentListItem = ({ comment }) => {
  return (
    <ListItem>
      <ListItemText primary={"Fulado de Tal"} secondary={comment.body} />
      <ListItemSecondaryAction>
        <IconButton edge="end">
          <ArrowUpwardIcon />
        </IconButton>
        <span>{comment.voteSum === null ? "0" : comment.voteSum}</span>
        <IconButton edge="end">
          <ArrowDownwardIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default CommentListItem;
