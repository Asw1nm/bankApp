import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  headers:new HttpHeaders
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentAcno:any
  currentUname:any
  constructor(private  http:HttpClient) {
   
   }

  
  register(acno:any,password:any,uname:any){
    const data ={
           acno,password,uname
    }

    return this.http.post('http://localhost:3000/register',data)

  }

  login(acno:any,password:any){

    const data ={
      acno,password
    }
    return this.http.post('http://localhost:3000/login',data)
    
  }
  
  deposit(acno:any,password:any,amt:any){
    const data ={
      acno,
      password,
      amt
    }
    return  this.http.post('http://localhost:3000/deposit',data,this.getOptions())
  }

getOptions(){
  const token = JSON.parse( localStorage.getItem('token')||'')
   let headers = new HttpHeaders()
   if(token){
     headers = headers.append('x-access-token',token)
     options.headers=headers
   }
   return options
}

  withdraw(acno:any,password:any,amt:any){

    const data ={
      acno,
      password,
      amt
    }

    return  this.http.post('http://localhost:3000/withdraw',data,this.getOptions())

  }
  getTransaction(acno:any){
      const data = {
        acno
      }
      return this.http.post('http://localhost:3000/transaction',data,this.getOptions())
  }

  delete(acountNo:any){
    
     return this.http.delete('http://localhost:3000/deleteAcc/'+acountNo,this.getOptions())
  }

}

