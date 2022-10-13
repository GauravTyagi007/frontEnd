import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizedOrderDetailsComponent } from './finalized-order-details.component';

describe('FinalizedOrderDetailsComponent', () => {
  let component: FinalizedOrderDetailsComponent;
  let fixture: ComponentFixture<FinalizedOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizedOrderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizedOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
