import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CartComponent } from '../cart/cart.component';
import { Observable } from 'rxjs';
import { products } from '../products';

@Component({
  selector: 'app-taco',
  templateUrl: './taco.component.html',
  styleUrls: ['./taco.component.css']
})
export class TacoComponent {
  products: any = [];
  private dataUrl = "http://ec2-3-101-146-86.us-west-1.compute.amazonaws.com:3000/Tacotaco"
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
  addToCart(prod: string){
    var userID = "0855313"
    var url="Cart/Add/"+userID +"/"+ prod
    console.log(url)


  }
}