import { Request, Response } from "express";
import selectUser from "../data/selectUser";

const getUser = async (req: Request, res: Response) => {
  try {
    // Consultar o banco de dados.
    const user = await selectUser(req.params.id);

    // Validar as saídas do banco.
    if (!user) {
      res.status(404).send("Usuário não encontrado.");
      return;
    }

    // Responder/encerrar a requisição.
    res.status(200).send({ id: user.id, nickname: user.nickname });
  } catch (error: any) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
};

export default getUser;
