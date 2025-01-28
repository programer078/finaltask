import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  public indv:any=[]
  constructor(public router:Router,public dataService:DataService) { }
  ngOnInit() {
    this.indv=this.dataService.getindv()
  }
goto()
{
  this.router.navigate(['/add-new-card'])
}
bac()
{
  this.router.navigate(['/profile'])
}
}
