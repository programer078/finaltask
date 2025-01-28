import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstagramPage } from './instagram.page';

describe('InstagramPage', () => {
  let component: InstagramPage;
  let fixture: ComponentFixture<InstagramPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
