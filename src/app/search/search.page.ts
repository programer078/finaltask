import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { Location } from '@angular/common';
import { DataService } from '../data.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  minPrice: number = 0; // Minimum price of the slider
  maxPrice: number = 200; // Maximum price of the slider
  selectedMinPrice: number = 10; // Starting selected minimum price
  selectedMaxPrice: number = 200;
  
  public indl: any[] = [];
  public womenProducts: any[] = [];
  public menProducts: any[] = [];
  public accessoriesProducts: any[] = [];
  public beautyProducts: any[] = [];
  public selectedCategory: string = 'all'; 
  public filteredProducts: any[] = [];
  public searchQuery: string = '';  // Holds the search text
canDismiss: any;

  constructor(public router: Router, 
              private animationCtrl: AnimationController, 
              private location: Location,
              public dataservice: DataService,
              public global: GlobalService) { }

  ngOnInit() {
    this.indl = this.dataservice.getindl();
    this.womenProducts = this.dataservice.getwomenProducts();
    this.menProducts = this.dataservice.getmenproducts();
    this.accessoriesProducts = this.dataservice.getaccessoriesProducts();
    this.beautyProducts = this.dataservice.getbeautyProducts();

    // Initially set filteredProducts to all products
    this.filteredProducts = [
      ...this.indl,
      ...this.womenProducts,
      ...this.menProducts,
      ...this.accessoriesProducts,
      ...this.beautyProducts
    ];
  }

  filterProducts() {
    const searchTerm = this.searchQuery.toLowerCase();
  
    let products = [
      ...this.indl,
      ...this.womenProducts,
      ...this.menProducts,
      ...this.accessoriesProducts,
      ...this.beautyProducts
    ];
  
    // Filter by search query
    if (searchTerm) {
      products = products.filter(item => item.lin.toLowerCase().includes(searchTerm));
    }
  
    // Filter by selected category
    if (this.selectedCategory !== 'all') {
      if (this.selectedCategory === 'women') {
        products = this.womenProducts;
      } else if (this.selectedCategory === 'men') {
        products = this.menProducts;
      } else if (this.selectedCategory === 'accessories') {
        products = this.accessoriesProducts;
      } else if (this.selectedCategory === 'beauty') {
        products = this.beautyProducts;
      }
    }
  
    // **Filter by selected price range**
    products = products.filter(item => {
      const price = parseFloat(item.dol.replace('$', '')); // Assuming prices are in string format like "$50"
      return price >= this.selectedMinPrice && price <= this.selectedMaxPrice;
    });
  
    this.filteredProducts = products;
  }
  
  applyFilters() {
    this.filterProducts();  // Apply search and category filters
    this.closeModal();      // Close the modal
  }

  closeModal() {
    const modal = document.querySelector('ion-modal');
    modal?.dismiss();
  }

  next(item: any) {
    this.router.navigate(['/product']);
    this.global.det_getdata(item);
  }

  goBack() {
    this.location.back();
  }
// createRightEnterAnimation = (baseEl: HTMLElement) => {
//   const root = baseEl.shadowRoot;

//   const backdropAnimation = this.animationCtrl.create()
//     .addElement(root?.querySelector('ion-backdrop')!)
//     .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

//   const wrapperAnimation = this.animationCtrl.create()
//     .addElement(root?.querySelector('.modal-wrapper')!)
//     .fromTo('transform', 'translateX(100%)', 'translateX(0%)');

//   return this.animationCtrl.create()
//     .addElement(baseEl)
//     .easing('ease-out')
//     .duration(250)
//     .addAnimation([backdropAnimation, wrapperAnimation]);
// }

// createRightLeaveAnimation = (baseEl: HTMLElement) => {
//   return this.createRightEnterAnimation(baseEl).direction('reverse');
// }
adjustMaxPrice() {
  if (this.selectedMaxPrice < this.selectedMinPrice) {
    this.selectedMaxPrice = this.selectedMinPrice;
  }
}

// Adjust min price so it doesn't go above selected max price
adjustMinPrice() {
  if (this.selectedMinPrice > this.selectedMaxPrice) {
    this.selectedMinPrice = this.selectedMaxPrice;
  }
}
  // Animation code omitted for brevity
}


