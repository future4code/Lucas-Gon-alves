import { Character } from "../entities/Character";
import { BaseDatabase } from "./BaseDatabase";

export class CharacterDatabase extends BaseDatabase {
  async create(character: Character) {
    await this.connection("character").insert(character);
  }

  async getAll() {
    return this.connection("character").select();
  }
}
