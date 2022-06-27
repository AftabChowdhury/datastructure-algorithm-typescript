import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-count',
  templateUrl: './word-count.component.html',
  styleUrls: ['./word-count.component.scss']
})
export class WordCountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.countWord('I am Aftab'));
  }

  countWord(word: string){
    return word.split(' ').length;
  }

}
