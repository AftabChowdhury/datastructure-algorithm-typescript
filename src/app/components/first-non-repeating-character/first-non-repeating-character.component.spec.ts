import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNonRepeatingCharacterComponent } from './first-non-repeating-character.component';

describe('FirstNonRepeatingCharacterComponent', () => {
  let component: FirstNonRepeatingCharacterComponent;
  let fixture: ComponentFixture<FirstNonRepeatingCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstNonRepeatingCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstNonRepeatingCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
