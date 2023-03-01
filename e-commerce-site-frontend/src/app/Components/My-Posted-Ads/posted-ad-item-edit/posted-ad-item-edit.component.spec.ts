import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedAdItemEditComponent } from './posted-ad-item-edit.component';

describe('PostedAdItemEditComponent', () => {
  let component: PostedAdItemEditComponent;
  let fixture: ComponentFixture<PostedAdItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostedAdItemEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostedAdItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
