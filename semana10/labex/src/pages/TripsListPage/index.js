import { Link } from "react-router-dom";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemLink,
} from "@material-ui/core";
import PageTitle from "../../components/PageTitle";
import { TrisListPageContainer } from "./styled";
import { useTripsList } from "../../hooks/useTripsList";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const TripsListPage = () => {
  const trips = useTripsList();

  useProtectedPage();

  return (
    <TrisListPageContainer>
      <PageTitle title={"Lista de Viagens"} />
      <Link to={"/viagens/criar"}>
        <Button variant={"outlined"} color={"primary"}>
          Criar Viagem
        </Button>
      </Link>

      <List component="nav">
        {trips.map((trip) => {
          return (
            <Link to={`/viagens/detalhe/${trip.id}`}>
              <ListItem button>
                <ListItemText primary={trip.name} />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </TrisListPageContainer>
  );
};

export default TripsListPage;
