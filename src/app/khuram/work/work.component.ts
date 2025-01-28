import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent  implements OnInit {
  public cartItems:[] = []; 
  item:any
  constructor(public router:Router) { }

  ngOnInit() {
    
  }
  goto()
  {
   this.router.navigate(['/search'])
  }
  go1()
  {
   this.router.navigate(['/your-cart'])
  }
  go2()
  {
   this.router.navigate(['/profile'])
  }
}
