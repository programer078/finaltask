import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckOut1Page } from './check-out-1.page';

describe('CheckOut1Page', () => {
  let component: CheckOut1Page;
  let fixture: ComponentFixture<CheckOut1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOut1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
