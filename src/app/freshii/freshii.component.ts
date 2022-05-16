import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CartComponent } from '../cart/cart.component';
import { Observable } from 'rxjs';
import { products } from '../products';

@Component({
  selector: 'app-freshii',
  templateUrl: './freshii.component.html',
  styleUrls: ['./freshii.component.css']
})
export class FreshiiComponent {
  products: any = [];
  customizations: any = []
  private dataUrl = "http://ec2-13-57-61-32.us-west-1.compute.amazonaws.com:3000/Freshii"
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
  /*getCusts(){
    let text = "";
    for (let x in products.allCusts) {
      text += products[x];
    }
  }*/
  loadProds(){
    return this.http.get(this.dataUrl, {responseType:'json'})
  }
  sendProds(url:string){
    return this.http.get(url, {responseType:'json'})
  }
  addCustom(cust:string){
    

  }
  addToCart(prod: string){
    var userID = "0855313"
    var url="http://ec2-13-57-61-32.us-west-1.compute.amazonaws.com:3000/Cart/Add/"+userID +"/"+ prod
    this.sendProds(url).subscribe()

  }
}