import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caesar-cipher-encryptor',
  templateUrl: './caesar-cipher-encryptor.component.html',
  styleUrls: ['./caesar-cipher-encryptor.component.scss']
})
export class CaesarCipherEncryptorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.caesarCipherEncryptor('xyz', 2));
  }

  caesarCipherEncryptor(string: string, key: number){
    let encrypTedArray = [];
    for(const character of string){
      const cipherValue = this.getCipherIndex(character, key);
      encrypTedArray.push(cipherValue);
    }
    return encrypTedArray.join('');
  }

  getCipherIndex(character: string, key: number){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let cipherIndex = alphabets.indexOf(character) + key;
    cipherIndex = cipherIndex % 26;
    return alphabets[cipherIndex];
  }

}
