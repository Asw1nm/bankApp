import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any
  lDate:any
  acountNo:any
   acno=""
   psw=""
   amount=""


   acno1=""
   psw1=""
   amount1=""
  
  constructor(private ds:DataService,private router:Router) { 
    this.user=this.ds.currentUname

    this.lDate=new Date
  }

  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      alert("please log in")
      this.router.navigateByUrl("")
    }
  }

  deposit(){
        var acno=this.acno
        var psw=this.psw
        var amount=this.amount

        const result=this.ds.deposit(acno,psw,amount)
        if(result){
            alert(acno+"successfully deposited and new balance is"+result)
            
        }
  }

  withdraw(){
       var acno=this.acno1
       var psw=this.psw1
       var amount=this.amount1
       const result=this.ds.withdraw(acno,psw,amount)
       if(result){
         alert(amount+"successfully debited and new balance is"+result)
         
       }
  }
  logOut(){
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("currentUname")
    this.router.navigateByUrl("")
  }
  deleteAccount(){
     this.acno=JSON.parse(localStorage.getItem("currentAcno")||'')
  }
  cancel(){
    this.acno=""
  }
  delete(event:any){
    alert("delete account "+event+" from parent")
    this.router.navigateByUrl("")
  }
}
