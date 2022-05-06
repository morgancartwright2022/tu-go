import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { products } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products: any = [];
  private dataUrl = "http://ec2-3-101-146-86.us-west-1.compute.amazonaws.com:3000/Cart/View/0855313"
  constructor(private http: HttpClient){
  }

  ngOnInit(){
    this.getCartProducts();
    console.log("check")
  }
  getCartProducts(){
    this.loadCartProds().subscribe(products => {
      this.products = products;
    });
  }
  
  loadCartProds(){
    return this.http.get(this.dataUrl, {responseType:'json'})
  }
}