import { Request, Response } from "express";
import moment from "moment";
import insertTask from "../data/insertTask";

const createTask = async (req: Request, res: Response) => {
  try {
    // Validar entradas da requisição.
    if (
      !req.body.title ||
      !req.body.description ||
      !req.body.deadline ||
      !req.body.authorId
    ) {
      res.status(400).send({ message: "Preencha todos os campos." });
      return;
    }

    const dateDiff: number =
      moment(req.body.deadline, "DD/MM/YYYY").unix() - moment().unix();

    if (dateDiff <= 0) {
      res.status(400).send({ message: "'deadline' deve ser uma data futura." });
    }

    // Consultar o banco de dados.
    const id: string = Date.now().toString();
    await insertTask(
      id,
      req.body.title,
      req.body.description,
      moment(req.body.deadline, "DD/MM/YYYY").format("YYYY-MM-DD"),
      req.body.authorId
    );

    // Responder/encerrar a requisição.
    res.status(200).send({
      message: "Tarefa criada com sucesso",
      id,
    });
  } catch (error: any) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
};

export default createTask;
