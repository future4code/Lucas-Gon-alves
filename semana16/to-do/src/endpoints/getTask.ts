import { Request, Response } from "express";
import moment from "moment";
import selectTask from "../data/selectTask";

const getTask = async (req: Request, res: Response) => {
  try {
    // Consultar o banco de dados.
    const result = await selectTask(req.params.id);

    if (!result) {
      res.status(404).send({ message: "Tarefa não encontrada" });
      return;
    }

    // Responder/encerrar a requisição.
    res.status(200).send({
      ...result,
      deadline: moment(result.deadline, "YY-MM-DD").format("DD/MM/YY"),
    });
  } catch (error: any) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
};

export default getTask;
