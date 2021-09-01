import React from "react";
import { AppBar, Button } from "@material-ui/core/";
import { StyledToolbar } from "./styled";
import { goToPostList, goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const Header = ({ rightButtonText, setRightButtonText }) => {
  const token = localStorage.getItem("token");
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLogin(history);
    } else {
      goToLogin(history);
    }
  };

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
        <Button onClick={rightButtonAction} color="inherit" variant="outlined">
          {rightButtonText}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
