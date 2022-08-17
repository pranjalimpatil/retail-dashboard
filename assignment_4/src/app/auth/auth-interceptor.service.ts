import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {take,exhaustMap} from 'rxjs/op';
import { NgIfContext } from '@angular/common';

@Injectable()
export class AuthIntercetorService implements  HttpInterceptor{
   
    constructor {private authService:AuthService}{}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
      
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user=>{
                const modiifedReq=req.clone({
                    params:new HttpParams().set('auth')
                })
            return NgIfContext.handle(req);

        }));

    
    
    }
}
