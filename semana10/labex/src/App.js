import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ListTripsPage from "./pages/ListTripsPage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import LoginPage from "./pages/LoginPage";
import AdmingHomePage from "./pages/AdminHomePage";
import CreateTripPage from "./pages/CreateTripPage";
import TripDetailsPage from "./pages/TripDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/list/trips">
          <ListTripsPage />
        </Route>
        <Route path="/trips/application">
          <ApplicationFormPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/admin/trips/list">
          <AdmingHomePage />
        </Route>
        <Route path="/admin/trips/create">
          <CreateTripPage />
        </Route>
        <Route exact path="/admin/trips/:id">
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
