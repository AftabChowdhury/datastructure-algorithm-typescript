import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let animals = ['jaguar', 'eagle'];
//Missing Line
    animals.pop();
console.log(animals.pop()); //Prints jaguar
  }
  test(){
   return [] === [];
  }

  logThis() {
    console.log(this);
  }

}
