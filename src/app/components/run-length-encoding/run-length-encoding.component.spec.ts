import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunLengthEncodingComponent } from './run-length-encoding.component';

describe('RunLengthEncodingComponent', () => {
  let component: RunLengthEncodingComponent;
  let fixture: ComponentFixture<RunLengthEncodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunLengthEncodingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunLengthEncodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
