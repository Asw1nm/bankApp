import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]]
   })

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    
    var acno=this.registerForm.value.acno
    var psw=this.registerForm.value.psw
    var uname=this.registerForm.value.uname
    
   if(this.registerForm.valid){
      const result =this.ds.register(acno,psw,uname)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          this.router.navigateByUrl("")
        }
      },
      (result)=>{
        alert(result.error.message)
      })
    }
    else{
      alert('invalid form')
    }
  }
}
