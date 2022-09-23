import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

public searchTerm  !: string;
public totalItem : number=0;
  // products: Product[];
 



  
  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
this.cartService.getProduct()
.subscribe(data=>{
this.totalItem = data.length;
})
   
     
}

search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.cartService.search.next(this.searchTerm);
    }
}