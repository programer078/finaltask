import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { GlobalService } from '../global.service';
import { Location } from '@angular/common';
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
  selector: 'app-my-wishlist-all-item',
  templateUrl: './my-wishlist-all-item.page.html',
  styleUrls: ['./my-wishlist-all-item.page.scss'],
})
export class MyWishlistAllItemPage implements OnInit {
isFavorite: any;
toggleFavorite() {
throw new Error('Method not implemented.');
}
public cartItems: CartItem[] = [];
    public indr:any=[]
    public inda:any=[]
    public favoriteItems: any[] = [];
  selectedSegment: string = 'default';  // Set the default segment

  constructor(public router:Router,public dataService: DataService,public global: GlobalService,    private location: Location,private globalService: GlobalService) { }
  ngOnInit() {
    this.cartItems = this.globalService.getCartItems();
  
    // Load favorite items from localStorage if they exist
    const storedFavorites = localStorage.getItem('favoriteItems');
    if (storedFavorites) {
      this.favoriteItems = JSON.parse(storedFavorites);
      // Update global favorites if needed
      this.global.setFavorites(this.favoriteItems);
    } else {
      this.favoriteItems = this.global.getFavorites();
    }
  
    this.global.favorites.subscribe(favorites => {
      this.favoriteItems = favorites;
      // Update local storage whenever favorites change
      this.updateFavoritesInLocalStorage();
    });
  
    this.indr = this.dataService.getindr();
    this.inda = this.dataService.getinda();
  }
  
  toggleFaorite(item: any) {
    item.isFavorite = !item.isFavorite;
  
    if (item.isFavorite) {
      this.global.addToFavorites(item); // You might have a method to add to favorites
    } else {
      this.global.removeFromFavorites(item);
    }
  
    // Update favorite items in localStorage
    this.updateFavoritesInLocalStorage();
  }
  
  // Function to update favorites in localStorage
  updateFavoritesInLocalStorage() {
    localStorage.setItem('favoriteItems', JSON.stringify(this.favoriteItems));
  }
  
  
  goBack() {
    this.location.back();
  }
goto()
{
  this.router.navigate(['/profile'])
}



go1()
{
  this.router.navigate(['/homepage-full'])
}
go2()
{
  this.router.navigate(['/search'])
}
go3()
{
  this.router.navigate(['/your-cart'])
}
kh(item:any)
{
  this.router.navigate(['/product'])
  this.global.det_getdata(item)
}
go4()
{
  this.router.navigate(['/profile'])
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

  segmentChanged(event: any) {
    console.log('Segment changed to', this.selectedSegment);
    // Add additional logic here if necessary
  }
}

