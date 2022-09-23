import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User =new User();
  constructor(private userService: UserService, private router: Router ,private formBuider: FormBuilder) { }


  loginForm : FormGroup
  submitted= false;


  ngOnInit(): void {
    this.loginForm = this.formBuider.group({
      
      userName : ['', Validators.required],
      password: ['', Validators.required]
     
    })
  }

  onLogin(){

    console.log(this.user)
    this.loginTheUser();
    }


    loginTheUser(){
      this.userService.findUserbyUserName(this.user).subscribe(data =>{
        // alert("login Successfully");
        this.router.navigate(['/home']);
        console.log(data);     
      },
      error => alert ("sorry please enter correct id & password......"));
      
    }
  
}
