import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageFullPage } from './homepage-full.page';

describe('HomepageFullPage', () => {
  let component: HomepageFullPage;
  let fixture: ComponentFixture<HomepageFullPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageFullPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
