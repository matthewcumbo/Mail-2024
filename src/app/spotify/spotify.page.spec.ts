import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpotifyPage } from './spotify.page';

describe('SpotifyPage', () => {
  let component: SpotifyPage;
  let fixture: ComponentFixture<SpotifyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
