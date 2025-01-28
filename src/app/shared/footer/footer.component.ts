import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {}
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
