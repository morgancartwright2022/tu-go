import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { products } from '../products';

@Component({
  selector: 'app-einsteins',
  templateUrl: './einsteins.component.html',
  styleUrls: ['./einsteins.component.css']
})
export class EinsteinsComponent {
  products: any = [];
  private dataUrl = "http://ec2-3-101-146-86.us-west-1.compute.amazonaws.com:3000/Einsteins"
  constructor(private http: HttpClient){
  }

  ngOnInit(){
    this.getProducts();
  }
  getProducts(){
    this.loadProds().subscribe(products => {
      this.products = products;
    });
  }
  loadProds(){
    return this.http.get(this.dataUrl, {responseType:'json'})
  }
  share() {
    window.alert('The product has been shared!');
  }
}