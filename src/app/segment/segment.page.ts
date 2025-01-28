import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  showPinkButton1 = true;
  showBlackButton1 = true;
  showPinkButton2 = true;
  showBlackButton2 = true;

  hideBottomBlackButton() {
    // Keep the top pink and black buttons visible
    this.showPinkButton1 = true;
    this.showBlackButton1 = true;
    
    // Hide the bottom black button and show the bottom pink button
    this.showPinkButton2 = true;
    this.showBlackButton2 = false;
  }

  hideBottomPinkButton() {
    // Keep the top pink and black buttons visible
    this.showPinkButton1 = true;
    this.showBlackButton1 = true;
    
    // Hide the bottom pink button and show the bottom black button
    this.showPinkButton2 = false;
    this.showBlackButton2 = true;
  }

  showAllButtons() {
    this.showPinkButton1 = true;
    this.showBlackButton1 = true;
    this.showPinkButton2 = true;
    this.showBlackButton2 = true;
  }
  ngOnInit() {
    // Restore button state on page load
  }

  // Navigate to the alert page with the selected color
 
}
