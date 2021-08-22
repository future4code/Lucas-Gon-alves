import { Button, TextField } from "@material-ui/core";
import PageTitle from "../../components/PageTitle";
import { FormContainer } from "../../components/FormContainer";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const CreateTripPage = () => {
  const history = useHistory();
  const [form, onChangeInput] = useForm({
    name: "",
    planet: "",
    date: new Date(),
    description: "",
    duration: "",
  });

  useProtectedPage();

  const onSubmitForm = (e) => {
    e.preventDefault();

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.duration,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-fernandes/trips",
        body,
        { headers: { auth: window.localStorage.getItem("token") } }
      )
      .then((res) => {
        history.push("/viagens");
      });
  };

  return (
    <div>
      <PageTitle title={"Criar Viagem"} />
      <FormContainer onSubmit={onSubmitForm}>
        <TextField
          label={"Nome"}
          value={form["name"]}
          onChange={onChangeInput}
          name={"name"}
        />
        <TextField
          label={"Planeta"}
          value={form["planet"]}
          onChange={onChangeInput}
          name={"planet"}
        />
        <TextField
          label="Data"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          value={form["date"]}
          onChange={onChangeInput}
          name={"date"}
        />
        <TextField
          label={"Descrição"}
          value={form["description"]}
          onChange={onChangeInput}
          name={"description"}
        />
        <TextField
          label={"Duração em dias"}
          value={form["duration"]}
          onChange={onChangeInput}
          name={"duration"}
          type={"number"}
        />
        <Button variant={"outlined"} color={"primary"} type={"submit"}>
          Criar
        </Button>
      </FormContainer>
    </div>
  );
};

export default CreateTripPage;
