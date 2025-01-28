import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  public product: any = {};
  public selectedColor: string = '';
  public selectedSize: string = '';
  public cartItems: CartItem[] = [];
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private location: Location,
    public global:GlobalService,
    private globalService: GlobalService
  ) {}
  public user:any
  isFavorite = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  
    // Define the favorite item
    const favoriteItem: any = {
      img: this.user.img,
      lin: this.user.lin,
      dol: this.user.dol,
      size: this.selectedSize,
      color: this.selectedColor,
      isFavorite: this.isFavorite  // Store favorite status
    };
  
    if (this.isFavorite) {
      this.global.addToFavorites(favoriteItem);
    } else {
      this.global.removeFromFavorites(favoriteItem);
    }
  }
  
  
  ngOnInit() {
    this.cartItems = this.globalService.getCartItems();
    this.route.queryParams.subscribe(params => this.product = params);
    this.global.Detail.subscribe(pro => {
      this.user = pro;
      console.log(pro);
  
      // Check if the product is already marked as favorite when loading the page
      const favoriteItem = this.global.getFavorites().find(
        (item) => item.lin === this.user.lin && item.size === this.selectedSize && item.color === this.selectedColor
      );
      if (favoriteItem) {
        this.isFavorite = true;
      }
    });
    this.route.queryParams.subscribe(params => this.product = params);
    this.global.Detail.subscribe(pro =>{
      this.user = pro
      console.log(pro)
    })
  }
  goto() {
    // Remove any non-numeric characters (except for the decimal point)
    const cleanedPrice = this.user.dol.replace(/[^0-9.]/g, '');
    const priceValue = parseFloat(cleanedPrice);
  
    if (isNaN(priceValue)) {
      console.error('Invalid price after cleaning:', cleanedPrice); // Log error if the cleaned price is invalid
      return;  // Exit the function if the price is invalid
    }
  
    // Define the cart item
    const cartItem: any = {
      map: this.user.img,       // Assuming user.img is the image source
      tru: this.user.lin,       // Assuming user.lin is the title
      price: priceValue,        // Use the parsed price value
      subtotal: priceValue,     // Initial subtotal is the same as price
      size: this.selectedSize,  // Selected size
      counter: 1,               // Starting quantity
      color: this.selectedColor // Selected color
    };
  
    // Check if the item with the same title, size, and color already exists in the cart
    const existingItem = this.global.getCartItems().find(
      (item) => item.tru === cartItem.tru && item.size === cartItem.size && item.color === cartItem.color
    );
  
    if (existingItem) {
      // If the item exists, increment its quantity
      existingItem.counter += cartItem.counter;
      existingItem.subtotal = existingItem.counter * existingItem.price;  // Update subtotal
    } else {
      // If the item is new, add it to the cart
      this.global.addToCart(cartItem);
    }
  
    // Navigate to the cart page
    this.router.navigate(['/your-cart']);
  }
  
  
  
  
  

  goBack() {
    this.location.back();
  }

  selectColor(color: string) {
    if (this.selectedColor !== color) {
      this.selectedColor = color;
      console.log(`Selected color: ${color}`);
    }
  }

  selectSize(size: string) {
    if (this.selectedSize !== size) {
      this.selectedSize = size;
      console.log(`Selected size: ${size}`);
    }
  }

  isColorSelected(color: string): boolean {
    return this.selectedColor === color;
  }

  isSizeSelected(size: string): boolean {
    return this.selectedSize === size;
  }
}