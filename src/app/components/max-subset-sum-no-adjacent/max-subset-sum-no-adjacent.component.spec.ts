import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxSubsetSumNoAdjacentComponent } from './max-subset-sum-no-adjacent.component';

describe('MaxSubsetSumNoAdjacentComponent', () => {
  let component: MaxSubsetSumNoAdjacentComponent;
  let fixture: ComponentFixture<MaxSubsetSumNoAdjacentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxSubsetSumNoAdjacentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxSubsetSumNoAdjacentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
