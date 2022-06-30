import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-unique-morse-code-words',
  templateUrl: './unique-morse-code-words.component.html',
  styleUrls: ['./unique-morse-code-words.component.scss']
})
export class UniqueMorseCodeWordsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //console.log(this.uniqueMorseRepresentations(["gin","zen","gig","msg"]));
    console.log(this.uniqueMorseRepresentations(["msg30", "gig53"]));
    //console.log(this.uniqueMorseRepresentations(["gin","cab"]));
  }

  uniqueMorseRepresentations(listwords: any) {
    if (listwords.length == 1) return 1;

    const obj: any = {
      a: ".-",
      b: "-...",
      c: "-.-.",
      d: "-..",
      e: ".",
      f: "..-.",
      g: "--.",
      h: "....",
      i: "..",
      j: ".---",
      k: "-.-",
      l: ".-..",
      m: "--",
      n: "-.",
      o: "---",
      p: ".--.",
      q: "--.-",
      r: ".-.",
      s: "...",
      t: "-",
      u: "..-",
      v: "...-",
      w: ".--",
      x: "-..-",
      y: "-.--",
      z: "--.."
    };

    let finalArr = [];
    for (let i = 0; i < listwords.length; i++) {
      let temp = "";
      for (const j of listwords[i]) {
        if (!isNaN(j)) continue;
        temp = temp + obj[j];
      }
      finalArr.push(temp)
    }
    return new Set(finalArr).size;
  }

}
