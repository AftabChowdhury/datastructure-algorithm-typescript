import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxSubarrayComponent } from './max-subarray.component';

describe('MaxSubarrayComponent', () => {
  let component: MaxSubarrayComponent;
  let fixture: ComponentFixture<MaxSubarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxSubarrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxSubarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
