import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsBoxComponent } from './items-box.component';

describe('ItemsBoxComponent', () => {
  let component: ItemsBoxComponent;
  let fixture: ComponentFixture<ItemsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
