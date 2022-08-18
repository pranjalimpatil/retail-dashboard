import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form :NgForm){
  
      if(!form.valid)return;
  
      const username=form.value.username;
      const password= form.value.password;
 
      this.authService.login(username,password).subscribe(
        resData=>{
          alert("login successfull redirecting you to dashboard");
          localStorage.setItem('token',resData.token);
          this.router.navigate(['/dashboard'])
        },error=>{
          console.log(error);
        }
      );
    
    form.reset();
  }
  

}
