import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  products : Product[];
  constructor(private productService: ProductService, private router: Router) { }


  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
    this.productService.getProductList().subscribe(data =>{
this.products = data;
    });
 
  }

  updateProduct(id:number){
    this.router.navigate(['update-Product',id]);
    
    }

    viewProduct(id:number){
      this.router.navigate(['view-Product',id])
    }

    deleteProduct(id:number){
      this.productService.deleteProduct(id).subscribe(data =>{
        console.log(data);
        this.getProducts();
      })
      }
}
