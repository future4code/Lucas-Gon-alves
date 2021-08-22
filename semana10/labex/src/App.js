import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import CreateTripPage from "./pages/CreateTripPage";
import TripsListPage from "./pages/TripsListPage";
import TripDetailPage from "./pages/TripDetailPage";
import LoginPage from "./pages/LoginPage";
import styled from "styled-components";
import { CssBaseline } from "@material-ui/core";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppContainer>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/inscricao">
            <ApplicationFormPage />
          </Route>
          <Route exact path="/viagens/criar">
            <CreateTripPage />
          </Route>
          <Route exact path="/viagens">
            <TripsListPage />
          </Route>
          <Route exact path="/viagens/detalhe/:tripId">
            <TripDetailPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;
