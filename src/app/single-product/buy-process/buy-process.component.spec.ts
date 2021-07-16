import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProcessComponent } from './buy-process.component';

describe('SavedCardsComponent', () => {
  let component: BuyProcessComponent;
  let fixture: ComponentFixture<BuyProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
