import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-check-out-3',
  templateUrl: './check-out-3.page.html',
  styleUrls: ['./check-out-3.page.scss'],
})
export class CheckOut3Page implements OnInit {

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
