import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-small-positive-integer',
  templateUrl: './small-positive-integer.component.html',
  styleUrls: ['./small-positive-integer.component.scss']
})
export class SmallPositiveIntegerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //const result = this.solution([1,3,6,4,1,2]);
    //const result = this.solution([-1,-3]);
     //const result = this.solution([3,4,-1,1]);
     //const result = this.solution([7,8,9,11,12]);
    //const result = this.solution([-1,-2,-60,40,43]);
    const result = this.solution([1,2,0]);
    console.log('result', result);
  }
  solution(A: any) {
    const positiveNumbers = A.filter((number: number) => number > 0);
    const maxNumber = Math.max(...positiveNumbers);
    const containsSet = new Set();
    for(let positiveNumber of positiveNumbers){
      containsSet.add(positiveNumber);
    }
    let result = 1;
    while (result <=maxNumber) {
      if(!containsSet.has(result)) return result;
      result++;
    }
    return result;
  }

}
