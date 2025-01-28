import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RateProductPage } from './rate-product.page';

describe('RateProductPage', () => {
  let component: RateProductPage;
  let fixture: ComponentFixture<RateProductPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RateProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
