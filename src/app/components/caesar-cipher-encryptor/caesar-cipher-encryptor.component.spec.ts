import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaesarCipherEncryptorComponent } from './caesar-cipher-encryptor.component';

describe('CaesarCipherEncryptorComponent', () => {
  let component: CaesarCipherEncryptorComponent;
  let fixture: ComponentFixture<CaesarCipherEncryptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaesarCipherEncryptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaesarCipherEncryptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
