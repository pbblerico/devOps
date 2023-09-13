import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./products";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private readonly API_URL = 'http://127.0.0.1:8080/api/v1';
  constructor(private http: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/products/`);
  }
}
