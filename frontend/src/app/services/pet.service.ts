import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private baseUrl = 'http://localhost:3333/pet';

  constructor(private http: HttpClient) {}

  getAllPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.baseUrl);
  }

  createPet(pet: Pet): Pet | Error {
    let error = {
      name: '',
      breed: '',
    };

    const petReq: Pet = {
      name: pet.name
        ? pet.name.trimStart().trimEnd()
        : (error.name = 'nome invalido'),
      breed: pet.breed
        ? pet.breed.trimStart().trimEnd()
        : (error.breed = 'espécie invalida'),
    };

    if (error.name !== '') {
      return new Error(error.name);
    }
    if (error.breed !== '') {
      return new Error(error.breed);
    }

    this.http.post<Pet>(this.baseUrl, petReq).subscribe();

    return petReq;
  }

  // getProductById(id: string): Observable<Product> {
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.get<Product>(url);
  // }

  // updateProduct(product: Product): Observable<Product> {
  //   const url = `${this.baseUrl}/${product.id}`;
  //   return this.http.put<Product>(url, product);
  // }

  // deleteProduct(id: string) {
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.delete<Product>(url);
  // }
}
