import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:"full"},
  {path:'addProduct', component:AddProductComponent},
  {path:'admin-home', component:AdminHomeComponent},
  {path:'productList', component:ProductListComponent},
  {path:'update-Product/:id', component:UpdateProductComponent},
  {path:'view-Product/:id', component:ViewProductComponent},
  {path: 'cart', component:CartComponent},
  {path: 'home' , component:HomeComponent},
  {path: 'register-user', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'payment', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
