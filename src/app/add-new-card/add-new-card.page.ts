import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-new-card',
  templateUrl: './add-new-card.page.html',
  styleUrls: ['./add-new-card.page.scss'],
})
export class AddNewCardPage implements OnInit {

  constructor(public router:Router,private location: Location) { }

  ngOnInit() {
  }
goto()
{
  this.router.navigate(['/check-out2'])
}
goto1()
{
  this.router.navigate(['/add-new-card'])
}
goBack() {
  this.location.back();
}

}
