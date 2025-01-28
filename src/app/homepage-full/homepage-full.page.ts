import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
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
  selector: 'app-homepage-full',
  templateUrl: './homepage-full.page.html',
  styleUrls: ['./homepage-full.page.scss'],
})

export class HomepageFullPage implements OnInit  {
  selectedFilter: string = '';
  
  public ind1:any=[
  
  ];
  public womenProducts:any=[
   
  ];
  public menProducts:any=[
   
  ];
  public accessoriesProducts:any=[
  
  ];
  public beautyProducts:any=[
   
  ];
  public ind11:any=[
  
  ];
  public ind12:any=[
  
  ]
  public indb:any=[
  
  ]
  public cartItems: CartItem[] = []; 
  item:any
  public currentProducts: any[] = this.womenProducts;
  constructor(public router:Router,private dataService: DataService,public global:GlobalService,private globalService: GlobalService) { }
 
  ngOnInit() {
    this.cartItems = this.globalService.getCartItems();

    console.log('OnInit called');
    this.ind1 = this.dataService.getind1();
    this.womenProducts = this.dataService.getwomenProducts();
    this.menProducts = this.dataService.getmenproducts();
    this.accessoriesProducts = this.dataService.getaccessoriesProducts();
    this.beautyProducts = this.dataService.getbeautyProducts();
    this.ind11= this.dataService.getind11();
    this.ind12= this.dataService.getind12();
    this.indb= this.dataService.getindb();
    this.filterProducts('women'); // Call filterProducts method initially with 'women' category
    console.log('Current products:', this.currentProducts);
  }
  filterProducts(category: string) {
    if (category === 'women') {
      this.currentProducts = this.womenProducts;
    } else if (category === 'men') {
      this.currentProducts = this.menProducts;
    } else if (category === 'accessories') {
      this.currentProducts = this.accessoriesProducts;
    } else if (category === 'beauty') {
      this.currentProducts = this.beautyProducts;
    }
  }
  toggleStyle(filter: string) {
    this.selectedFilter = filter;
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
 goToFoundResult() {
  // Set products in global service
  this.globalService.updateProducts(this.currentProducts);
  // Navigate to the found result page
  this.router.navigate(['/found-result']);
}

 home()
 {
  this.router.navigate(['/homepage-full'])
 }
 ser()
 {
  this.router.navigate(['/search'])
 }
 ord()
 {
  this.router.navigate(['/my-orders-1'])
 }
 pro()
 {
  this.router.navigate(['/profile'])
 }
 set()
 {
  this.router.navigate(['/profile-setting'])
 }
 rate()
 {
  this.router.navigate(['/rate-product'])
 }
 order()
 {
  this.router.navigate(['/order-info-1'])
 }
 wis()
 {
  this.router.navigate(['/my-wishlist-all-item'])
 }
//  next(item: any) {
//   this.router.navigate(['/product'], { queryParams: item });
// }
next(item:any){
  this.router.navigate(['/product'])
  this.global.det_getdata(item)
}
}