import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdPageComponent } from './post-ad-page.component';

describe('PostAdPageComponent', () => {
  let component: PostAdPageComponent;
  let fixture: ComponentFixture<PostAdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAdPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
