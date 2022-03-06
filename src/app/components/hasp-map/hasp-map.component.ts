import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hasp-map',
  templateUrl: './hasp-map.component.html',
  styleUrls: ['./hasp-map.component.scss']
})
export class HaspMapComponent implements OnInit {
  //keyValue: any;

  constructor() { }

  ngOnInit(): void {
    let result = this.createHashMap('sajed');
    console.log(result);
  }

  createHashMap(string: string) {
    let hashMap = new Map<string, number>();
    let keyValue: number | undefined = 0;
    for (let character of string) {
      if (!hashMap.has(character)) {
        hashMap.set(character, 1);
      } else {
        keyValue  = hashMap.get(character);
        // @ts-ignore
        hashMap.set(character, keyValue + 1);
      }
    }

    let count = -1;
    for (let character of string) {
      count = count + 1;
      if(hashMap.get(character) === 1){
        return count;
      }
    }
    return -1;
  }

}
