import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Outlay, OutlayRequest } from '../models/outlay.model';

@Injectable({
  providedIn: 'root',
})
export class OutlayService {
  private baseUrl = 'http://localhost:3333/outlay';

  constructor(private http: HttpClient) {}

  getAllOutlays(): Observable<Outlay[]> {
    return this.http.get<Outlay[]>(this.baseUrl);
  }

  getOutlayById(id: string): Observable<Outlay> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Outlay>(url);
  }

  createOutlay(outlay: OutlayRequest): Error | undefined {
    const error = {
      title: '',
      price: '',
      pet: '',
    };

    const outlayReq = {
      title: outlay.title
        ? outlay.title.trimStart().trimEnd()
        : (error.title = 'titulo invalido'),
      price: outlay.price
        ? outlay.price * 100
        : (error.price = 'preço invalido'),
      pet_id:
        typeof outlay.pet === 'string'
          ? (error.pet = 'Selecione um pet')
          : outlay.pet.id,
    };

    if (error.title !== '') {
      return new Error(error.title);
    }
    if (error.price !== '') {
      return new Error(error.price);
    }
    if (error.pet !== '') {
      return new Error(error.pet);
    }

    this.http.post<Outlay>(this.baseUrl, outlayReq).subscribe();
    return;
  }

  updateOutlay(outlay: Outlay) {
    const url = `${this.baseUrl}/${outlay.id}`;

    this.http
      .put<Outlay>(url, {
        title: outlay.title,
        price: outlay.price,
        pet_id: outlay.pet_id,
      })
      .subscribe();
  }

  deleteOutlay(id: string) {
    const url = `${this.baseUrl}/${id}`;
    this.http.delete<Outlay>(url).subscribe();
  }
}
