import React from "react";
import { AppBar, Button } from "@material-ui/core/";
import { StyledToolbar } from "./styled";
import { goToPostList, goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button
          onClick={() => goToPostList(history)}
          color="inherit"
          size="large"
        >
          LabEddit
        </Button>
        <Button
          onClick={() => goToLogin(history)}
          color="inherit"
          variant="outlined"
        >
          Login
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
