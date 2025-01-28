import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular'; // Importing AlertController
import { DataService } from '../data.service'; // Assuming you have a data service to fetch the cart data
import { GlobalService } from '../global.service';
interface ind {
  map: string;
  tru: string;
  price: number;
  subtotal: number;
  size: string;
  counter: number;
  color: string;
}

@Component({
  selector: 'app-your-cart',
  templateUrl: './your-cart.page.html',
  styleUrls: ['./your-cart.page.scss'],
  providers: [DecimalPipe],
})
export class YourCartPage implements OnInit {
  // This will hold the items in the cart
 
  private currentItemForAlert: ind | null = null; // Variable to track the card on which alert is triggered
  public indw: ind[] = [
    { map: 'Item 1', tru: 'Test Item', price: 100, subtotal: 0, size: 'M', counter: 1, color: 'Red' }
  ];
  public totals = {
    productPrice: 0,
    shipping: 1000,
    subtotal: 0,
  };

  constructor(
    private router: Router,
    private decimalPipe: DecimalPipe,
    private location: Location,
    private dataService: DataService, // To get the cart items
    private alertController: AlertController,
    private global:GlobalService,
     // To show alerts
  ) {
    this.indw.forEach(item => {
      item.subtotal = item.counter * item.price;
    });
  }

  ngOnInit() {
    this.indw = this.global.getCartItems();
    this.calculateTotals();
    // Get the cart items from DataService
    // this.indw = this.dataService.getindw();
    // this.calculateTotals();
  }

  // Calculate the totals for product price and subtotal
calculateTotals() {
  this.totals.productPrice = this.indw.reduce((sum, item) => {
    item.subtotal = parseFloat((item.counter * item.price).toFixed(2));  // Round subtotal to 2 decimal places
    return sum + item.subtotal;
  }, 0);
  this.totals.subtotal = parseFloat((this.totals.productPrice + this.totals.shipping).toFixed(2));  // Round final subtotal
}

  
 
  

  // Navigation to the checkout page
  goto() {
    if (this.indw && this.indw.length > 0) {
      this.global.setCartItems(this.indw);  // Pass cart items
      this.global.setCartTotals(this.totals);  // Pass totals (product price, shipping, subtotal)
      this.router.navigate(['/check-out-1']);  // Navigate to the checkout page
    } else {
      console.log('Cart is empty, not proceeding to checkout');
    }
  }
  
  
  goBack() {
    this.location.back();
  }

  // Increment the product quantity

  increment(item: ind) {
    item.counter++;
    item.subtotal = parseFloat((item.counter * item.price).toFixed(2));
    this.calculateTotals();
  }

  decrement(item: ind) {
    if (item.counter > 1) {
      item.counter--;
      item.subtotal = parseFloat((item.counter * item.price).toFixed(2));
    }
    this.calculateTotals();
  }

  deleteItem(item: any) {
    const index = this.indw.indexOf(item);
    if (index > -1) {
      this.indw.splice(index, 1);  // Remove the item from the cart
      this.calculateTotals();  // Recalculate totals after item is removed
    }
  }
  
  // Remove the item from the cart
  removeItem(item: ind) {
    this.indw = this.indw.filter(cartItem => cartItem !== item);
    this.calculateTotals();
  }


 
}