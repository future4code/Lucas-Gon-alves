import express, { Express, Request, Response } from "express";
import cors from "cors";
import { accounts } from "./account";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/users/all", (req: Request, res: Response) => {
  try {
    if (accounts.length == 0) {
      res.statusCode = 404;
      throw new Error("Nenhuma conta encontrada");
    }
    res.status(200).send(accounts);
  } catch (error: any) {
    res.send(error.message);
  }
});

app.post("/users", (req: Request, res: Response) => {
  try {
    const { name, CPF, dateOfBirthAsString } = req.body;

    const [day, month, year] = dateOfBirthAsString.split("/");

    const dateOfBirth: Date = new Date(`${year}-${month}-${day}`);

    // Validar as entradas da requisição.
    const ageInMilisseconds: number = Date.now() - dateOfBirth.getTime();

    const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365;

    if (ageInYears < 18) {
      res.statusCode = 406;
      throw new Error("A idade deve ser maior que 18 anos.");
    }

    // Consultar ou alterar a base de dados.

    accounts.push({
      name,
      CPF,
      dateOfBirth,
      balance: 0,
      statement: [],
    });

    // Validar os resultados da consulta.

    // Enviar a resposta.
    res.status(201).send("Conta criada com sucesso.");
  } catch (error: any) {
    console.log(error);
    res.send(error.message);
  }
});

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});
