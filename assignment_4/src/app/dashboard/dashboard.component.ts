import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


interface tsResponse { total_sales: number;}
interface uvResponse { unique_visitor: number;}
interface asResponse { var: number;}
interface dsResponse { sold_items:any;}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  template:''
})


export class DashboardComponent implements OnInit {

  uniquevisitors: number = 0;
  averagesales: number = 0;
  totalsales: number = 0;
  sold_items:any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {


    const token = localStorage.getItem("token");

    this.http.get<tsResponse>('http://localhost:5000/totalsales',{headers: new HttpHeaders().set('Authorization', "Bearer "+token)}).subscribe(responsedata => {
        console.log(responsedata['total_sales'])
        this.totalsales=responsedata['total_sales']
      },error=>{
        console.log(error)
      })
    this.http.get<uvResponse>('http://localhost:5000/uniquevisitors', { headers: new HttpHeaders().set('Authorization', "Bearer " + token) }).subscribe(responsedata => {
      console.log(responsedata['unique_visitor'])
      this.uniquevisitors = responsedata['unique_visitor']
    }, error => {
      console.log(error)
    })
    this.http.get<asResponse>('http://localhost:5000/avg_sales_per_customer', { headers: new HttpHeaders().set('Authorization', "Bearer " + token) }).subscribe(responsedata => {
      console.log(responsedata['var'])
      this.averagesales = responsedata['var']
    }, error => {
      console.log(error)
    })
    this.http.get<dsResponse>('http://localhost:5000/daily_sales_list', { headers: new HttpHeaders().set('Authorization', "Bearer " + token) }).subscribe(responsedata => {
      console.log(responsedata['sold_items'])
      this.sold_items = responsedata['sold_items']
      console.log(this.sold_items)
    }, error => {
      console.log(error)
    })
  
  }

  OnLogOut() {
    this.router.navigate(['/log_in'])


  }

}
