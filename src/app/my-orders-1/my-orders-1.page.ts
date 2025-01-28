import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Location } from '@angular/common';
import { GlobalService } from '../global.service';

interface CartItem {
  map: string;
  counter: number;
  tru: string;
  price: number;
  subtotal: number;
  size: string;
  color: string;
}

@Component({
  selector: 'app-my-orders-1',
  templateUrl: './my-orders-1.page.html',
  styleUrls: ['./my-orders-1.page.scss'],
})
export class MyOrders1Page implements OnInit {
  public cartItems: CartItem[] = []; 
  public deliveredItems: CartItem[] = []; // Items marked as Delivered
  public cancelledItems: CartItem[] = [];// Type definition added
  public indk: any[] = [];
  public indh: any[] = [];
  public indu: any[] = [];
  totals: any;

  selectedSegment: string = 'home';
  

  constructor(
    public router: Router,
    public dataService: DataService,
    private location: Location,
    private globalService: GlobalService
  ) {}

  ngOnInit() {
    this.loadData();
    this.totals = this.globalService.getCartTotals();
    this.cartItems = this.globalService.getCartItems();
    this.indk = this.dataService.getindk();
    this.indh = this.dataService.getindh();
    this.indu = this.dataService.getindu();
  }

  loadData() {
    this.totals = this.globalService.getCartTotals();

    // Load cartItems from localStorage or globalService
    const savedCartItems = localStorage.getItem('cartItems');
    this.cartItems = savedCartItems ? JSON.parse(savedCartItems) : this.globalService.getCartItems();

    // Load deliveredItems from localStorage
    const savedDeliveredItems = localStorage.getItem('deliveredItems');
    this.deliveredItems = savedDeliveredItems ? JSON.parse(savedDeliveredItems) : [];

    // Load cancelledItems from localStorage
    const savedCancelledItems = localStorage.getItem('cancelledItems');
    this.cancelledItems = savedCancelledItems ? JSON.parse(savedCancelledItems) : [];
  }

  // Method to save data to localStorage
  saveData() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    localStorage.setItem('deliveredItems', JSON.stringify(this.deliveredItems));
    localStorage.setItem('cancelledItems', JSON.stringify(this.cancelledItems));
  }
  goto() {
    this.router.navigate(['/order-info-1']);
  }

  go1() {
    this.router.navigate(['/homepage-full']);
  }

  goc() {
    this.router.navigate(['/your-cart']);
  }

  go2() {
    this.router.navigate(['/search']);
  }
  moveToDelivered(item: CartItem, index: number) {
    this.deliveredItems.push(item);
    this.cartItems.splice(index, 1); 
    this.saveData();// Remove from Pending
  }

  // Method to handle moving an item to Canceled
  moveToCancelled(item: CartItem, index: number) {
    this.cancelledItems.push(item);
    this.cartItems.splice(index, 1);
    this.saveData(); // Remove from Pending
  }

  // Adjust the segmentChanged method to handle items in different segments
  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }
  goBack() {
    this.location.back();
  }

  go3() {
    this.router.navigate(['/new-card']);
  }

  go4() {
    this.router.navigate(['/profile']);
  }

  home() {
    this.router.navigate(['/homepage-full']);
  }

  ser() {
    this.router.navigate(['/search']);
  }

  ord() {
    this.router.navigate(['/my-orders-1']);
  }

  pro() {
    this.router.navigate(['/profile']);
  }

  set() {
    this.router.navigate(['/profile-setting']);
  }

  rate() {
    this.router.navigate(['/rate-product']);
  }

  order() {
    this.router.navigate(['/order-info-1']);
  }
}
