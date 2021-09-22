import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { countries } from "./data";
import { country } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// Exercício 1

app.get("/countries", (req: Request, res: Response) => {
  res.status(200).send(countries);
});

// Exercício 2
/*
app.get("/countries/:id", (req: Request, res: Response) => {
  const result: country | undefined = countries.find(
    (country) => country.id === Number(req.params.id)
  );
  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send("Not found");
  }
});
*/

// Exercício 3
app.get("/countries/search", (req: Request, res: Response) => {
  try {
    if (!req.query.name && !req.query.capital && !req.query.continent) {
      throw new Error("Nenhum parâmetro utilizado");
    }

    let result: country[] = countries;

    if (req.query.name) {
      result = result.filter((country) =>
        country.name.includes(req.query.name as string)
      );
    }

    if (req.query.capital) {
      result = result.filter((country) =>
        country.capital.includes(req.query.capital as string)
      );
    }

    if (req.query.continent) {
      result = result.filter((country) =>
        country.continent.includes(req.query.continent as string)
      );
    }

    res.status(200).send({ result });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});
