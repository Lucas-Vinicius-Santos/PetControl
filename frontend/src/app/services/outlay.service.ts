import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Outlay } from '../models/outlay.model';

@Injectable({
  providedIn: 'root',
})
export class OutlayService {
  private baseUrl = 'http://localhost:3333/outlay';

  constructor(private http: HttpClient) {}

  // createProduct(product: Product): Observable<Product> {
  //   return this.http.post<Product>(this.baseUrl, product);
  // }

  getAllOutlays(): Observable<Outlay[]> {
    return this.http.get<Outlay[]>(this.baseUrl);
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
