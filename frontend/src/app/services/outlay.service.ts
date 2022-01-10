import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Outlay, OutlayRequest } from '../models/outlay.model';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root',
})
export class OutlayService {
  private baseUrl = 'http://localhost:3333/outlay';

  constructor(private http: HttpClient) {}

  getAllOutlays(): Observable<Outlay[]> {
    return this.http.get<Outlay[]>(this.baseUrl);
  }

  createOutlay(outlay: OutlayRequest): /* Observable<Outlay | Error> */ void {
    const outlayReq = {
      title: outlay.title,
      price: outlay.price ? outlay.price * 100 : 0,
      pet_id: typeof outlay.pet === 'string' ? 0 : outlay.pet.id,
    };

    this.http.post<Outlay>(this.baseUrl, outlayReq).subscribe();
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
