import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderInfo1Page } from './order-info-1.page';

describe('OrderInfo1Page', () => {
  let component: OrderInfo1Page;
  let fixture: ComponentFixture<OrderInfo1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderInfo1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
