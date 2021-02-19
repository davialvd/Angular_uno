import { Component, OnInit } from '@angular/core';
import  { NgForm } from "@angular/forms";
import { userModel }   from '../../models/user.model';
import { loginModel }   from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


user: loginModel =new loginModel();	
  constructor() { }

  ngOnInit(): void {

  	this.user.email="",
  	this.user.password=""
  }
  sendData(form: NgForm){


  	console.log ("formulario",form);
  	console.log ("formulario",this.user);



  }


  
}
