import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatNewPasswordPage } from './creat-new-password.page';

describe('CreatNewPasswordPage', () => {
  let component: CreatNewPasswordPage;
  let fixture: ComponentFixture<CreatNewPasswordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatNewPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
