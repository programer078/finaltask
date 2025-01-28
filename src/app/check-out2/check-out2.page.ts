import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../data.service';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-check-out2',
  templateUrl: './check-out2.page.html',
  styleUrls: ['./check-out2.page.scss'],
})
export class CheckOut2Page implements OnInit {
  public isAgreed: boolean = false;
 public ind3:any=[
 
 ]
 public ind2:any=[

 ]
  totals: any;
  constructor(public router:Router,private location: Location,public dataservice:DataService,private globalService: GlobalService) { }

  ngOnInit() {
    this.totals = this.globalService.getCartTotals();
    this.ind3=this.dataservice.getind3();
    this.ind2=this.dataservice.getind2()
  }
goto()
{
  this.router.navigate(['/my-orders-1'])
}
go1()
{
  this.router.navigate(['/add-new-card'])
}
goBack() {
  this.location.back();
}

}
