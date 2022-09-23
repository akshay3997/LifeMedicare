import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  searchKey: string="";
  public productList :any;
  public filterCategory : any;
  constructor(private api:ApiService, private cartService :CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(data=>{
      this.productList=data;
      this.filterCategory=data;
      this.productList.array.forEach((a:any) => {
        if(a.category === "Syrup" ){
          a.category="Syrup"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
  });

this.cartService.search.subscribe((val:any)=>{
  this.searchKey =val;
})
}

addtocart(item:any){
  this.cartService.addToCart(item);
    }

    filter(category:string){
this.filterCategory = this.productList
.filter((a:any)=>{
  if(a.category == category || category==''){
    return a;
  }
})
    }
}