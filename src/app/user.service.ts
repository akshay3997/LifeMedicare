import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseURL = "http://localhost:8080/api/v1/users";

  
  constructor(private HttpClient: HttpClient) { }

  createUser(user:User):Observable<object>{
    return this.HttpClient.post(`${this.baseURL}`,user);
  } 

  private baseURL1 = "http://localhost:8080/api/v1/loginUser";
  findUserbyUserName(user:User):Observable<object>{
    console.log(user)
    return this.HttpClient.post(`${this.baseURL1}`,user);
  }

  
}
