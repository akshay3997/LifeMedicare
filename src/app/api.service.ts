import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private HttpClien: HttpClient) { }

  getProduct(){
    return this.HttpClien.get<any>("  http://localhost:8080/api/v1/products")
    .pipe(map((data:any)=> {
      return data;
    }))
  }
}
