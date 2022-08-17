import { Injectable } from '@angular/core';
 import {HttpClient } from '@angular/common/http';
import {throwError,Subject} from 'rxjs';
import {User}from './user.model';

interface AuthResponse{
  username:string;
  password:string;
  token:string;
  
}

 @Injectable({ providedIn: 'root'})

export class AuthService {

  user =new Subject<User>();

  constructor(private http:HttpClient) { }
  login(username:string,password:string){
    return this.http.post<AuthResponse>(' http://127.0.0.1:5000/log_in',{
      username:username,
      password:password
    });
  }
 
  private saveAuthData(token: string) {  
    localStorage.setItem('token', token);  
  }  
}
