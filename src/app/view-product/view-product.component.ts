import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  id:number
  product:Product
  constructor(private route: ActivatedRoute, private productService : ProductService, private router: Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.product = new Product();
    this.productService.getProductById(this.id).subscribe(data =>{
      this.product= data;
    });
  }

}
