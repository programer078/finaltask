import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoundResultPage } from './found-result.page';

describe('FoundResultPage', () => {
  let component: FoundResultPage;
  let fixture: ComponentFixture<FoundResultPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
