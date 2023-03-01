import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarItemsComponent } from './similar-items.component';

describe('SimilarItemsComponent', () => {
  let component: SimilarItemsComponent;
  let fixture: ComponentFixture<SimilarItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
