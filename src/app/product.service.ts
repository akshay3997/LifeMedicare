import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL= "http://localhost:8080/api/v1/products";
  constructor(private HttpClient : HttpClient) { }

  getProductList(): Observable<Product[]>{
  return this.HttpClient.get<Product[]>(`${this,this.baseURL}`);
}

// getproduct(){
//   return this.HttpClient.get<any>("http://localhost:8080/api/v1/products")
//   .pipe(map((data:any)=> {
//     return data;
//   }))
// }

createProduct(product:Product):Observable<object>{
  return this.HttpClient.post(`${this.baseURL}`,product);
}  


// ---------------------------------------
// createProduct(product:FormData){
//   return this.HttpClient.post(`${this.baseURL}`,product);
//  }
// // -----------------------------------------
 updateProduct(id: number, product: Product):Observable<object>{
  return this.HttpClient.put(`${this.baseURL}/${id}`, product)
     }


    getProductById(id:number): Observable<Product>{
      return this.HttpClient.get<Product>(`${this.baseURL}/${id}`);
    }

    deleteProduct(id:number):Observable<object>{
      return this.HttpClient.delete(`${this.baseURL}/${id}`);
    }

}
