import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../data.service';
@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.page.html',
  styleUrls: ['./new-card.page.scss'],
})
export class NewCardPage implements OnInit {
 public indm:any=[
 ]
  constructor(public router:Router,private location: Location,public dataservice:DataService) { }
  ngOnInit() {
    this.indm=this.dataservice.getindm();
  }
goto()
{
  this.router.navigate(['/add-new-card'])
}
goBack() {
  this.location.back();
}

}
