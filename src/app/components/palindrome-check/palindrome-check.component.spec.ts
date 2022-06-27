import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromeCheckComponent } from './palindrome-check.component';

describe('PalindromeCheckComponent', () => {
  let component: PalindromeCheckComponent;
  let fixture: ComponentFixture<PalindromeCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalindromeCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
