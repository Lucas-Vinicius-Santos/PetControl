import { Pet } from './pet.model';

export interface Outlay {
  id?: number;
  title: string;
  price: number;
  pet: Pet;
}

export interface OutlayRequest {
  title: string;
  price: number | null;
  pet: Pet | string;
}
