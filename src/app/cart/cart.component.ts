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
  cartProds: any;
  private dataUrl = "http://ec2-13-57-61-32.us-west-1.compute.amazonaws.com:3000/Cart/View/0855313"
  constructor(private http: HttpClient){
  }

  ngOnInit(){
    this.getCartProducts();
    console.log("check")
  }
  getCartProducts(){
    this.loadCartProds().subscribe(cartProds => {
      this.cartProds = cartProds;
    });
  }
  
  loadCartProds(){
    return this.http.get(this.dataUrl, {responseType:'json'})
  }
  clearCart(){
    this.dataUrl="http://ec2-13-57-61-32.us-west-1.compute.amazonaws.com:3000/Cart/Delete/0855313"
  }
  goCheckout(){
    this.dataUrl="http://ec2-13-57-61-32.us-west-1.compute.amazonaws.com:3000/Checkout"
  }
}