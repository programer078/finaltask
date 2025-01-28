import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.page.html',
  styleUrls: ['./profile-setting.page.scss'],
})
export class ProfileSettingPage implements OnInit {

  constructor(public router:Router,private location: Location) { }
  ngOnInit() {
  }
 goto()
 {
  this.router.navigate(['/profile'])
 }
 goBack() {
  this.location.back();
}

}
