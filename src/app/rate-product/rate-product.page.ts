import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-rate-product',
  templateUrl: './rate-product.page.html',
  styleUrls: ['./rate-product.page.scss'],
})
export class RateProductPage implements OnInit {

  constructor(public router:Router,private location: Location) { }

  ngOnInit() {
  }
goto()
{
  this.router.navigate(['/order-info-2'])
}
goBack() {
  this.location.back();
}

}
