import { Request, Response } from "express";
import { PetService } from "../services/PetService";

export class PetController {
  async getAllPets(req: Request, res: Response) {
    const service = new PetService();

    const result = await service.getAllPets();

    return res.json(result);
  }

  async createPet(req: Request, res: Response) {
    const { name, breed } = req.body;

    const service = new PetService();

    const result = await service.createPet({ name, breed });

    if (result instanceof Error) {
      res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }

  async updatePet(req: Request, res: Response) {
    const { id } = req.params;
    const { name, breed } = req.body;

    const service = new PetService();

    const result = await service.updatePet({ id, name, breed });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }

  async deletePet(req: Request, res: Response) {
    const { id } = req.params;

    const service = new PetService();

    const result = await service.deletePet(id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(204).end();
  }
}
