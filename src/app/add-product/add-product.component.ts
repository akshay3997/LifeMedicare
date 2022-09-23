import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Filehandle } from '../_model/file-handel.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {



  product: Product =new Product();
  constructor(private productService: ProductService, private router: Router, private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
  }

  saveProduct(){

// -------------------------
// const productFormData =this.prepareFormData(this.product);


// ----------------------

    this.productService.createProduct(this.product).subscribe(data =>{
      console.log(data);
      this.goToProductList();
      
    },
    error => console.log(error));
  }
//-------------------------------------------------------------------------------------------------
// prepareFormData(product:Product):FormData{
//   const formData =new FormData();

//   formData.append(
//     'product', 
//     new Blob([JSON.stringify(product)], {type:'application/json'})
//   );
// for(var i=0;i<product.image.length; i++){
//   formData.append(
// 'image',
// product.image[i].file,
// product.image[i].file.name
//   );
// }
// return formData;
// }

// -----------------------------------------------------------------------------------------------------
  goToProductList(){
    this.router.navigate(['/productList']);
  }

  onSubmit(){
    console.log(this.product)
    this.saveProduct();
    }

    // -----------------------------------------------------
//     onFileSelected(event:any){
// if(event.target.files){
//   const file =event.target.files[0];
// const fileHandel : Filehandle={
//   file: file,
//   url:this.sanitizer.bypassSecurityTrustUrl(
//     window.URL.createObjectURL(file)
//   )
// }
// this.product.image.push(fileHandel);

// }
  // }


    
    // -----------------------------------------------
}
