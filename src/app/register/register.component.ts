import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User =new User();
  constructor(private userService: UserService, private router: Router ,private formBuider: FormBuilder) { }


  registerForm : FormGroup
  submitted= false;


  ngOnInit(): void {

    this.registerForm = this.formBuider.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      userName : ['', Validators.required],
      password: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      address : ['', Validators.required]
    })
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe(data =>{
      console.log(data);
      this.goToLogin();
    },
    error => console.log(error));
    
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  onRegister(){
    this.submitted=true;
if(this.registerForm.invalid){
  return;
}
    console.log(this.user)
    this.saveUser();
    }
}
