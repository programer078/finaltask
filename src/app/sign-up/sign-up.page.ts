import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  doRefresh(event: any) {
    console.log('Refreshing page...');
    
    // Simulating a short delay
    setTimeout(() => {
      // Stop the refresh animation
      event.target.complete();
      
      // Full page reload to refresh content
      window.location.reload();
    }, 1000); // 1 second delay
  }
  constructor(public router:Router) { }

  ngOnInit() {
  }
goto()
{
  this.router.navigate(['/log-in'])
}
}
