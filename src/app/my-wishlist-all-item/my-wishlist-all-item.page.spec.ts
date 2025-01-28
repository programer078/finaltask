import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyWishlistAllItemPage } from './my-wishlist-all-item.page';

describe('MyWishlistAllItemPage', () => {
  let component: MyWishlistAllItemPage;
  let fixture: ComponentFixture<MyWishlistAllItemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWishlistAllItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
