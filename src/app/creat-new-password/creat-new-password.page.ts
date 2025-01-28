import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-new-password',
  templateUrl: './creat-new-password.page.html',
  styleUrls: ['./creat-new-password.page.scss'],
})
export class CreatNewPasswordPage implements OnInit {

  constructor(public router:Router,private location: Location) { }
  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }
  goto()
  {
    this.router.navigate(['/log-in'])
  }
  
}
