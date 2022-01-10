import { getRepository } from "typeorm";
import { Outlay } from "../entities/Outlay";
import { Pet } from "../entities/Pet";

interface OutlayRequest {
  id?: string;
  title: string;
  price: number;
  pet_id: number;
}

export class OutlayService {
  async getAllOutlays() {
    const repo = getRepository(Outlay);

    const outlays = await repo.find({
      relations: ["pet"],
    });

    return outlays;
  }

  async getOutlayById(id: string): Promise<Outlay | Error> {
    const repo = getRepository(Outlay);

    const outlay = await repo.findOne(id, {
      relations: ["pet"],
    });

    if (!outlay) {
      return new Error("Outlay does not exist");
    }

    return outlay;
  }

  async createOutlay({
    title,
    price,
    pet_id,
  }: OutlayRequest): Promise<Outlay | Error> {
    const repo = getRepository(Outlay);
    const repoPet = getRepository(Pet);

    if (!Number.isFinite(price)) {
      return new Error("Price invalid");
    }

    if (!(await repoPet.findOne(pet_id))) {
      return new Error("Pet does not exist");
    }

    const outlay = repo.create({
      title: title.toLowerCase(),
      price,
      pet_id,
    });

    await repo.save(outlay);

    return outlay;
  }

  async updateOutlay({
    id,
    title,
    price,
    pet_id,
  }: OutlayRequest): Promise<Outlay | Error> {
    const repo = getRepository(Outlay);

    const outlay = await repo.findOne(id);

    if (!outlay) {
      return new Error("Outlay does not exist");
    }

    outlay.title = title ? title : outlay.title;
    outlay.price = price ? price : outlay.price;
    outlay.pet_id = pet_id ? pet_id : outlay.pet_id;

    await repo.save(outlay);

    return outlay;
  }
  async deleteOutlay(id: string) {
    const repo = getRepository(Outlay);

    if (!(await repo.findOne(id))) {
      return new Error("Outlay does not exist");
    }

    await repo.delete(id);
  }
}
