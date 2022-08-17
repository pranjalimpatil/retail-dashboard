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
  
    if(!form.valid)return;
   console.log(form.value);
    const username=form.value.username;
    const password= form.value.password;

    this.registerService.register(username,password).subscribe(
      resData=>{
        console.log(resData);
        this.router.navigate(['/log_in'])
      },error=>{
        console.log(error);
      }
    );
  
  form.reset();
}


}
