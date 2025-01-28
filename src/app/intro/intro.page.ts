import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
public indc:any=[

]
  constructor(public router:Router,public dataservice:DataService) { }

  ngOnInit() {
    this.indc=this.dataservice.getindc()
  }
goto()
{
  this.router.navigate(['/log-in'])
}
}
