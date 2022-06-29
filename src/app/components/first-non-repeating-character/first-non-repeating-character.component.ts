import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-non-repeating-character',
  templateUrl: './first-non-repeating-character.component.html',
  styleUrls: ['./first-non-repeating-character.component.scss']
})
export class FirstNonRepeatingCharacterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.firstNonRepeatingCharacter('abcdcaf'));
  }

  firstNonRepeatingCharacter(string: string) {
    const characterHashMap: any = {};
    for(const character of string) {
      if(character in characterHashMap){
        characterHashMap[character] += 1;
      } else {
        characterHashMap[character] = 1;
      }
    }
    let count = 0;
    for(const character of string) {
      if(characterHashMap[character] === 1) {
        return count;
      }
      count ++;
    }
    return -1;
  }

}
