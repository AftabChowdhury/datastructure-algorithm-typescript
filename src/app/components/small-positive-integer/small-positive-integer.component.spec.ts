import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallPositiveIntegerComponent } from './small-positive-integer.component';

describe('SmallPositiveIntegerComponent', () => {
  let component: SmallPositiveIntegerComponent;
  let fixture: ComponentFixture<SmallPositiveIntegerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallPositiveIntegerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallPositiveIntegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
