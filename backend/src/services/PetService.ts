import { getRepository } from "typeorm";
import { Pet } from "../entities/Pet";

interface PetRequest {
  id?: string;
  name: string;
  breed: string;
}

export class PetService {
  async getAllPets() {
    const repo = getRepository(Pet);

    const pets = await repo.find();

    return pets;
  }

  async getPetById(id: string): Promise<Pet | Error> {
    const repo = getRepository(Pet);

    const pet = await repo.findOne(id);

    if (!pet) {
      return new Error("Pet does not exist");
    }

    return pet;
  }

  async createPet({ name, breed }: PetRequest): Promise<Pet | Error> {
    const repo = getRepository(Pet);

    if (await repo.findOne({ name })) {
      return new Error("Pet already exist");
    }

    const pet = repo.create({
      name: name.toLowerCase(),
      breed: breed.toLowerCase(),
    });

    await repo.save(pet);

    return pet;
  }

  async updatePet({ id, name, breed }: PetRequest): Promise<Pet | Error> {
    const repo = getRepository(Pet);

    const pet = await repo.findOne(id);

    if (!pet) {
      return new Error("Pet does not exist");
    }

    pet.name = name ? name : pet.name;
    pet.breed = breed ? breed : pet.breed;

    await repo.save(pet);

    return pet;
  }

  async deletePet(id: string) {
    const repo = getRepository(Pet);

    if (!(await repo.findOne(id))) {
      return new Error("Pet does not exist");
    }

    await repo.delete(id);
  }
}
