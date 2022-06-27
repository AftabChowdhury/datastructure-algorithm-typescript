import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-max-subarray',
  templateUrl: './max-subarray.component.html',
  styleUrls: ['./max-subarray.component.scss']
})
export class MaxSubarrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
    console.log(this.maxSubArray([1]));
    console.log(this.maxSubArray([5,4,-1,7,8]));
    console.log(this.maxSubArray([-1]));
  }

  maxSubArray(nums: number[]) {
    let currentSum = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;
    for (let num of nums) {
      currentSum += num;
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
      if (currentSum < 0) {
        currentSum = 0;
      }
    }
    return maxSum;
  }
}
