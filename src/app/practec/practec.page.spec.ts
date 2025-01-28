import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PractecPage } from './practec.page';

describe('PractecPage', () => {
  let component: PractecPage;
  let fixture: ComponentFixture<PractecPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PractecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
