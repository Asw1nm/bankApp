import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions:any
  acno:any
 

  constructor(private ds:DataService) {
    this.acno = JSON.parse(localStorage.getItem('currentAcno')||'')
    this.ds.getTransaction(this.acno)
    .subscribe((result:any)=>{
      if(result){
          this.transactions = result.transaction
      }
    },
    (result)=>{
         alert(result.message)
    })
  
   }

  ngOnInit(): void {
  }

}
