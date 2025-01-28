import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarHomePage } from './sidebar-home.page';

describe('SidebarHomePage', () => {
  let component: SidebarHomePage;
  let fixture: ComponentFixture<SidebarHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
