import { Request, Response } from "express";

const createUser = async (req: Request, res: Response) => {
  try {
    // Validar entradas da requisição.
    // Consultar o banco de dados.
    // Validar as saídas do banco.
    // Responder/encerrar a requisição.
  } catch (error: any) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
};

export default createUser;
