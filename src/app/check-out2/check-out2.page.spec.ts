import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckOut2Page } from './check-out2.page';

describe('CheckOut2Page', () => {
  let component: CheckOut2Page;
  let fixture: ComponentFixture<CheckOut2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOut2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
