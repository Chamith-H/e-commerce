import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedAdPageComponent } from './posted-ad-page.component';

describe('PostedAdPageComponent', () => {
  let component: PostedAdPageComponent;
  let fixture: ComponentFixture<PostedAdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostedAdPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostedAdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
