import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit{
 username: String='Neosoft';
 password: String= '';
 errorMessage: String= 'Invalid Credentials';
 invalidLogin: boolean= false;

 //Router
 //Angular.giveMeRouter
 //Dependency Injection
 constructor(private router: Router, private hardcodedAuthentication:HardcodedAuthenticationService){

 }

 ngOnInit(): void{
   
 }

 handleLogin(){
  // console.log(this.username);
  //if(this.username === 'Neosoft' && this.password === 'dummy'){
  if(this.hardcodedAuthentication.authenticate(this.username,this.password)){
    //Redirect to welcome page
    this.router.navigate(['welcome', this.username])
    this.invalidLogin = false
  }else{
    this.invalidLogin = true
  }
 }
}
