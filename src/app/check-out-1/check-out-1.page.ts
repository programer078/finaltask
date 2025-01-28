import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-check-out-1',
  templateUrl: './check-out-1.page.html',
  styleUrls: ['./check-out-1.page.scss'],
})
export class CheckOut1Page implements OnInit {
  public cartItems: any[] = [];
  public totals: any = {
    productPrice: 0,
    shipping: 0,  // Initial shipping cost
    subtotal: 0
  };
  public selectedShipping: any = {
    free: true,  // Default selection
    standard: false,
    fast: false
  };
  constructor(public router:Router,private location: Location,private globalService: GlobalService) { }
  ngOnInit() {
    this.cartItems = this.globalService.getCartItems();  // Retrieve cart items
    this.totals = this.globalService.getCartTotals();    // Retrieve totals (subtotal, shipping, etc.)
    this.cartItems = this.globalService.getCartItems();  // Retrieve cart items
    this.totals = this.globalService.getCartTotals();    // Retrieve totals (subtotal, shipping, etc.)

    // Set initial shipping cost based on default selected option
    this.updateShipping('free');

    // Set the totals in the global service for access on the next page
    this.globalService.setCartTotals(this.totals);
    // Set initial shipping cost based on default selected option
    this.updateShipping('free');
  }

  updateShipping(method: string) {
    // Reset all checkboxes to false
    this.selectedShipping = {
      free: false,
      standard: false,
      fast: false
    };

    // Set the selected method to true
    this.selectedShipping[method] = true;

    // Update shipping price based on the selected method
    switch (method) {
      case 'free':
        this.totals.shipping = 0;
        break;
      case 'standard':
        this.totals.shipping = 9.90;
        break;
      case 'fast':
        this.totals.shipping = 19.90;
        break;
      default:
        this.totals.shipping = 0;
    }

    // Update the subtotal with the new shipping cost
    this.totals.subtotal = this.totals.productPrice + this.totals.shipping;
  }

  goto()
  {
   this.router.navigate(['/check-out2'])
  }
  goBack() {
    this.location.back();
  }
}

