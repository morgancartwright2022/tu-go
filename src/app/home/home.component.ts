import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private dataUrl = 'http://ec2-3-101-146-86.us-west-1.compute.amazonaws.com:3000/data';
  constructor(
    private http: HttpClient) { }
  
  getData(): Observable<any> {
    // Gets data from url address and returns it as an Observable
    // Observables are an object class Angular uses for handling callbacks
    return this.http.get(this.dataUrl, {responseType: 'text'});
  }

  displayValue(): void {
    // Displays data received from http request
    this.getData().subscribe(data => {
      console.log(data);
      window.alert(data);
    });
  }
  
  ngOnInit(): void {
  }

}
