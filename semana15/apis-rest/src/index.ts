import express, { Request, Response } from "express";
import cors from "cors";

type User = {
  id: number;
  name: string;
  email: string;
  type: string;
  age: number;
};

const users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: "ADMIN",
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: "NORMAL",
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: "NORMAL",
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: "NORMAL",
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: "ADMIN",
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: "ADMIN",
    age: 60,
  },
];

const app = express();
app.use(express.json());
app.use(cors());

// Exercício 1
app.get("/users", (req: Request, res: Response) => {
  let codeError = 400;
  try {
    res.status(200).send(users);
  } catch (error: any) {
    res.status(codeError).send({ message: error.message });
  }
});
/*
a) Usária o método GET.
b) "/users"
*/

app.listen(3003, () => {
  console.log("Server is running at port 3003");
});
