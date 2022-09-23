import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  

  // public searchTerm : string = '';
  ngOnInit(): void {
//     this.cartService.getProduct()
//     .subscribe(data=>{
// this.totalItem=data.length;
//     })
  }


}

