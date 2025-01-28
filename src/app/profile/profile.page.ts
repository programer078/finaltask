import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
goto()
{
  this.router.navigate(['/profile-setting'])
}
go()
{
  this.router.navigate(['/homepage-full'])
}
go1()
{
  this.router.navigate(['/search'])
}
go2()
{
  this.router.navigate(['/payment'])
}
pa()
{
  this.router.navigate(['/payment'])
}
pa1()
{
  this.router.navigate(['/my-wishlist-all-item'])
}
pa2()
{
  this.router.navigate(['/rate-product'])
}
}
