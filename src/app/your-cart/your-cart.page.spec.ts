import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourCartPage } from './your-cart.page';

describe('YourCartPage', () => {
  let component: YourCartPage;
  let fixture: ComponentFixture<YourCartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(YourCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
