import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hasp-map',
  templateUrl: './hasp-map.component.html',
  styleUrls: ['./hasp-map.component.scss']
})
export class HaspMapComponent implements OnInit {
  keyValue: any;

  constructor() { }

  ngOnInit(): void {
    this.createHashMap('aftab');
  }

  createHashMap(sampleString: string) {
    let hashMap = new Map<string, number>();
    for (let character of sampleString) {
      if (!hashMap.has(character)) {
        hashMap.set(character, 1);
      } else {
        this.keyValue  = hashMap.get(character);
        hashMap.set(character, this.keyValue + 1);
      }
    }

    for(let [key, value] of hashMap){
      console.log(key,':', value);
    }
  }

}
