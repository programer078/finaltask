import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyOrders1Page } from './my-orders-1.page';

describe('MyOrders1Page', () => {
  let component: MyOrders1Page;
  let fixture: ComponentFixture<MyOrders1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrders1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
