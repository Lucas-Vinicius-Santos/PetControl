export interface Outlay {
  id?: number;
  title: string;
  price: number;
  pet: {
    id: number;
    name: string;
    breed: string;
  };
}
