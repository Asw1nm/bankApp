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
  
//   login(a:any,p:any){
      
//     var acno=
//     var pswd=this.psw
//     let database=this.database
//     if(acno in database){
//       if(pswd == database[acno]['password'])
//          alert("login success")
//       }
//       else{
//         alert("wrong password")
//       }
//     }
//     else{
//       alert("no user found")
//     }
// }


  login(){
      
      var acno=this.loginForm.value.acno
      var psw=this.loginForm.value.psw

      if(this.loginForm.valid){
      const result =this.ds.login(acno,psw)
      if(result){
          alert("login success")
          this.routerLogin.navigateByUrl("home")

       }
      }
      else{
        alert("invalid form")
      }
  }
  // acnoChange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.accno);
    
  // }
  // passChange(event:any){
  //   this.psw=event.target.value
  //   console.log(this.psw);
    
  // }

}
