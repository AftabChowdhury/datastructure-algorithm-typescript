import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //console.log(this.test(["gin","zen","gig","msg"]));
    console.log(this.test(["msg30", "gig53"]));
    //console.log(this.test(["gin","cab"]));
  }

  test(listwords: any){
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
				  if(!isNaN(j)) continue;
          temp = temp + obj[j];
				}
				finalArr.push(temp)
			}
			return new Set(finalArr).size;
  }
}
