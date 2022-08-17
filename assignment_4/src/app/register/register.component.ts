import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {RegisterService} from './register.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form :NgForm){
  
    if(!form.valid)return ;
  
    const username=form.value.username;
    const password= form.value.password;

    this.registerService.register(username,password).subscribe(
      resData=>{
        alert("user registration successfull");
        this.router.navigate(['/auth'])
      },error=>{
        console.log(error);
      }
    );
  
  form.reset();
}


}
