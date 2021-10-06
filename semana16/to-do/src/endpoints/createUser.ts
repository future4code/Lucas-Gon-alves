import { Request, Response } from "express";
import insertUser from "../data/insertUser";

const createUser = async (req: Request, res: Response) => {
  try {
    // Validar entradas da requisição.
    if (!req.body.name || !req.body.nickname || !req.body.email) {
      res.status(400).send("Preencha todos os campos.");
      return;
    }

    // Consultar o banco de dados.
    const id: string = Date.now() + Math.random().toString();

    await insertUser(id, req.body.name, req.body.nickname, req.body.email);

    // Responder/encerrar a requisição.
    res.status(200).send("Usuário criado com sucesso.");
  } catch (error: any) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
};

export default createUser;
