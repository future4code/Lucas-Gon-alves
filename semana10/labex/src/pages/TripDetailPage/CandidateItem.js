import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const CandidateItem = (props) => {
  const approvedCandidate = () => {
    props.decideCandidate(true, props.candidate.id);
  };

  const rejectedCandidate = () => {
    props.decideCandidate(false, props.candidate.id);
  };

  return (
    <ListItem>
      <ListItemText primary={props.candidate.name} />
      <ListItemSecondaryAction>
        <IconButton onClick={approvedCandidate}>
          <ThumbUpIcon />
        </IconButton>
        <IconButton onClick={rejectedCandidate}>
          <ThumbDownIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default CandidateItem;
