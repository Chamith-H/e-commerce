import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAdsPageComponent } from './item-ads-page.component';

describe('ItemAdsPageComponent', () => {
  let component: ItemAdsPageComponent;
  let fixture: ComponentFixture<ItemAdsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAdsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemAdsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
