import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-order-info-2',
  templateUrl: './order-info-2.page.html',
  styleUrls: ['./order-info-2.page.scss'],
})
export class OrderInfo2Page implements OnInit {

  constructor(public router:Router,private location: Location) { }
 
  ngOnInit() {
  }
goto()
{
  this.router.navigate(['/homepage-full'])
}
goBack() {
  this.location.back();
}

}
