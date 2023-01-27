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
    if(localStorage.getItem('currentUname')){
        this.user =JSON.parse(localStorage.getItem('currentUname')||'')
    }  

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

        this.ds.deposit(acno,psw,amount)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
          }
        },
        (result)=>{
          alert(result.error.message)
        })
  }

  withdraw(){
       var acno=this.acno1
       var psw=this.psw1
       var amount=this.amount1

       this.ds.withdraw(acno,psw,amount)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
          }
        },
        (result)=>{
          alert(result.error.message)
        })
  }


  logOut(){
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("currentUname")
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }
  
  deleteAccount(){
      this.acountNo=JSON.parse( localStorage.getItem("currentAcno")||'')
  }
  
  cancel(){
    this.acountNo=""
  }

  delete(event:any){
    this.ds.delete(event)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        localStorage.removeItem("currentAcno")
        localStorage.removeItem("currentUname")
        localStorage.removeItem("token")
        this.router.navigateByUrl("")
      }
    },
    (result)=>{
      alert(result.error.message)
    })
  }

}
