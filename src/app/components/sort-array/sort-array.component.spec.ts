import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortArrayComponent } from './sort-array.component';

describe('SortArrayComponent', () => {
  let component: SortArrayComponent;
  let fixture: ComponentFixture<SortArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
