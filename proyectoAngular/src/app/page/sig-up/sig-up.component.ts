import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { userModel }   from '../../models/user.model';

@Component({
  selector: 'app-sig-up',
  templateUrl: './sig-up.component.html',
  styleUrls: ['./sig-up.component.css']
})
export class SigUpComponent implements OnInit {


  user: userModel =new userModel();	
  constructor() { }

  ngOnInit(): void {

  	this.user.email="",
  	this.user.nombre="",
  	this.user.password=""
  }

  sendData(form: NgForm){


  	console.log ("formulario",form);
  	console.log ("formulario",this.user);



  }

}
