import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaspMapComponent } from './hasp-map.component';

describe('HaspMapComponent', () => {
  let component: HaspMapComponent;
  let fixture: ComponentFixture<HaspMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaspMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaspMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
