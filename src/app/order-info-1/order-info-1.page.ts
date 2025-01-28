import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-order-info-1',
  templateUrl: './order-info-1.page.html',
  styleUrls: ['./order-info-1.page.scss'],
})
export class OrderInfo1Page implements OnInit {

  constructor( public router:Router,private location: Location) { }
  ngOnInit() {
  }
goto()
{
  this.router.navigate(['rate-product'])
}
goBack() {
  this.location.back();
}

hom()
{
  this.router.navigate(['homepage-full'])
}

}
