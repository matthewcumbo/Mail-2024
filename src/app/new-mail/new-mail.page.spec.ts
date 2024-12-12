import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewMailPage } from './new-mail.page';

describe('NewMailPage', () => {
  let component: NewMailPage;
  let fixture: ComponentFixture<NewMailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
