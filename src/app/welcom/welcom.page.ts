import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcom',
  templateUrl: './welcom.page.html',
  styleUrls: ['./welcom.page.scss'],
})
export class WelcomPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
 goto()
 {
  this.router.navigate(['/intro'])
 }
}
