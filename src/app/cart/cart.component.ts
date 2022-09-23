import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public products: any =[];
  public grandTotal !: number ;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.getProduct()
    .subscribe(data=>{
      this.products= data;
      this.grandTotal=this.cartService.getTotalPrice();
    })

  }


  removeItem(item:any){
    this.cartService.removeCartItem(item);
    
  }

  emptyCart(){
    this.cartService.removeAllCart();
  }
}
