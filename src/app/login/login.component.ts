import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Banking Partner"
  accno="account number please"
  acno=""
  psw=""
  loginForm=this.fb.group({
   
    psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]]
   })

  constructor(private routerLogin:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
      
      var acno=this.loginForm.value.acno
      var psw=this.loginForm.value.psw

      if(this.loginForm.valid){
        this.ds.login(acno,psw)
        .subscribe((result:any)=>{
             if(result){
               localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
               localStorage.setItem('currentUname',JSON.stringify(result.currentUname))
               localStorage.setItem('token',JSON.stringify(result.token))
               alert(result.message)
               this.routerLogin.navigateByUrl("home")
             }
        },
        (result)=>{
           alert(result.error.message)
        })
      }
      else{
        alert("invalid form")
      }
    }
}
