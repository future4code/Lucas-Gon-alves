import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { FormContainer } from "../../components/FormContainer";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { useForm } from "../../hooks/useForm";
import { useTripsList } from "../../hooks/useTripsList";
import { useHistory } from "react-router-dom";
import { ButtonsContainer } from "../HomePage/styled";

const ApplicationFormPage = () => {
  const history = useHistory();
  const trips = useTripsList();
  const [form, onChangeInput] = useForm({
    name: "",
    age: 0,
    applicationText: "",
    profession: "",
    trip: null,
  });

  const onSubmitApplication = (e) => {
    e.preventDefault();
    console.log(form);
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };

    axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-fernandes/trips/${form.trip.id}/apply`,
      body
    );
  };

  return (
    <div>
      <PageTitle title={"Aplicar para Viagem"} />
      <FormContainer onSubmit={onSubmitApplication}>
        <TextField
          label={"Nome"}
          value={form["name"]}
          onChange={onChangeInput}
          name={"name"}
        />
        <TextField
          label={"Idade"}
          type={"number"}
          value={form["age"]}
          onChange={onChangeInput}
          name={"age"}
        />
        <TextField
          label={"Texto de aplicação"}
          helperText="Explique por que você é um bom candidato"
          value={form["applicationText"]}
          onChange={onChangeInput}
          name={"applicationText"}
        />
        <TextField
          label={"Profissão"}
          value={form["profession"]}
          onChange={onChangeInput}
          name={"profession"}
        />

        <FormControl>
          <InputLabel id="select-paises">Países</InputLabel>
          <Select
            labelId="select-paises"
            value={form["country"]}
            onChange={onChangeInput}
            name={"country"}
          >
            <MenuItem value={"brasil"}>Brasil</MenuItem>
            <MenuItem value={"china"}>China</MenuItem>
            <MenuItem value={"eua"}>Estados Unidos</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="select-viagens">Viagens</InputLabel>
          <Select
            labelId="select-viagens"
            value={form["trip"]}
            onChange={onChangeInput}
            name={"trip"}
          >
            {trips.map((trip) => {
              return <MenuItem value={trip}>{trip.name}</MenuItem>;
            })}
          </Select>
        </FormControl>

        <ButtonsContainer>
          <Button
            variant={"outlined"}
            color={"primary"}
            onClick={() => history.goBack()}
          >
            Voltar
          </Button>
          <Button variant={"outlined"} color={"primary"} type={"submit"}>
            Inscrever-se
          </Button>
        </ButtonsContainer>
      </FormContainer>
    </div>
  );
};

export default ApplicationFormPage;
