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

  // createProduct(product: Product): Observable<Product> {
  //   return this.http.post<Product>(this.baseUrl, product);
  // }

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
