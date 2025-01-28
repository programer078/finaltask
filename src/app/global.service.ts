import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private cartItems: any[] = [];
  updateCartItem: any;
  private favoriteItems: any[] = [];
  constructor() { }

  private data = new BehaviorSubject<any[]>([]);
  public Detail = this.data.asObservable();
  private productsSource = new BehaviorSubject<any[]>([]);
  currentProducts = this.productsSource.asObservable();
  public favorites = new BehaviorSubject<any[]>(this.favoriteItems);


  private cartItemsa = new BehaviorSubject<any[]>([]);  // Cart items
  private cartTotals = new BehaviorSubject<any>(null);  // Totals for price and shipping

  // Set cart items
  setCartItems(items: any[]) {
    if (items && items.length > 0) {
      this.cartItemsa.next(items);
    }
    this.cartItems = items;
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  // Get cart items
  getCartItemsa() {
    return this.cartItems.values;
  }
  addToFavorites(item: any) {
    this.favorites.next([...this.favorites.value, item]);
    // Check if the item is already a favorite
    const existingFavorite = this.favoriteItems.find(fav => 
      fav.lin === item.lin && fav.color === item.color && fav.size === item.size
    );
  
    if (!existingFavorite) {
      this.favoriteItems.push(item);
      this.favorites.next(this.favoriteItems); // Notify observers
    } else {
      console.log('Item is already in favorites'); // Optional: Log if item already exists
    }
  }
  setFavorites(items: any[]) {
    this.favorites.next(items); // Set favorites to the given array
  }
  
  removeFromFavorites(item: any) {
    this.favoriteItems = this.favoriteItems.filter(
      (fav) => !(fav.lin === item.lin && fav.size === item.size && fav.color === item.color)
    );
  }
  isFavorite(item: any): boolean {
    return this.favoriteItems.some(fav => fav.tru === item.tru && fav.color === item.color && fav.size === item.size);
  }  
  getFavoriteItems() {
    return this.favoriteItems;
  }
  // Set cart totals
  setCartTotals(totals: any) {
    this.cartTotals.next(totals);
  }

  // Get cart totals
  getCartTotals() {
    return this.cartTotals.value;
  }



  getFavorites() {
    return this.favoriteItems;
  }
  det_getdata(det:any){
    this.data.next(det)
    // console.log(data)
  }
  addToCart(item: any) {
    this.cartItems.push(item);
  }

  // Get all cart items
  getCartItems() {
    return this.cartItems;
  }
  
  updateProducts(products: any[]) {
    this.productsSource.next(products);
  }
  // Clear the cart
  clearCart() {
    this.cartItems = [];
  }
}