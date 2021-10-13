import { Request, Response } from "express";
import { CharacterDatabase } from "../database/CharacterDatabase";
import { Character } from "../entities/Character";
import { CustomError } from "../errors/CustomErros";

export default async function createCharacter(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, gender, description } = req.body;

    if (!name || !gender) {
      throw new CustomError("Invalid input", 406);
    }

    const character = new Character(name, gender, description);

    const characterDatabase = new CharacterDatabase();
    await characterDatabase.create(character);

    res.status(201).end();
  } catch (error) {
    res.status(500).end();
  }
}
