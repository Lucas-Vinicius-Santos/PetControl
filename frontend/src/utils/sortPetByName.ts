import { Pet } from 'src/app/models/pet.model';

export default function compareByName(a: Pet, b: Pet) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
