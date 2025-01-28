import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderInfo2Page } from './order-info-2.page';

describe('OrderInfo2Page', () => {
  let component: OrderInfo2Page;
  let fixture: ComponentFixture<OrderInfo2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderInfo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
