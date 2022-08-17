import { Injectable } from '@angular/core';
 import {HttpClient } from '@angular/common/http';
// import {User}from './user.model';
import {throwError,Subject} from 'rxjs';

interface AuthResponse{
  username:string;
  password:string;
  
}
 
 @Injectable({ providedIn: 'root'})

export class RegisterService {

  // user =new Subject<User>();

  constructor(private http:HttpClient) { }
  register(username:string,password:string){
    return this.http.post<AuthResponse>(' http://127.0.0.1:5000/register',{
      username:username,
      password:password
    });
  }


}
