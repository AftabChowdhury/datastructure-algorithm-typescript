import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-array',
  templateUrl: './sort-array.component.html',
  styleUrls: ['./sort-array.component.scss']
})
export class SortArrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const x = this.sortArray([5,3,2])
    console.log(x);
  }

  sortArray(array:any){
    array.sort();
    return array;
  }

}
