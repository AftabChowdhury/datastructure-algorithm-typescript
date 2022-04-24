import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-max-subset-sum-no-adjacent',
  templateUrl: './max-subset-sum-no-adjacent.component.html',
  styleUrls: ['./max-subset-sum-no-adjacent.component.scss']
})
export class MaxSubsetSumNoAdjacentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  maxSubsetSumNoAdjacent(array: number[]) {
    if (array.length < 1) {
      return 0;
    } else if (array.length === 1) {
      return array[0];
    } else if (array.length === 2) {
      return Math.max(array[0], array[1]);
    }
    let exclusiveSum = array[0];
    let inclusiveSum = Math.max(array[0], array[1]);

    for (let i = 2; i < array.length; i++) {
      const temp = inclusiveSum;
      inclusiveSum = Math.max(inclusiveSum, array[i] + exclusiveSum);
      exclusiveSum = temp
    }

    return inclusiveSum;
  }


}
