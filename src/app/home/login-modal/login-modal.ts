import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: "login-modal",
  templateUrl: "./login-modal.html",
})
export class LoginModalComponent implements OnInit {
  loginForm!: FormGroup;
  constructor() {}
  
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }
  
  displayStyle = "none";
  
  get emailField() {
    return this.loginForm.get('email');
  }

  get passwordField() {
    return this.loginForm.get('password');
  }

  loginFormSubmit(){
    console.log(this.loginForm.value);
    // Call Api
  }


  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}