import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-run-length-encoding',
  templateUrl: './run-length-encoding.component.html',
  styleUrls: ['./run-length-encoding.component.scss']
})
export class RunLengthEncodingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   const result = this.runLengthEncoding('AAAAAAAAAAAAABBCCCCDD');
   console.log('Encode: ',result);
  }

  runLengthEncoding(string: string) {
    // Write your code here.
    let count = 0;
    const runLengthEncoding = [];
    for (let i = 1; i < string.length; i++) {
        count++;
        const previousCharacter = string[i-1];
        const currentCharacter = string[i];
        if(previousCharacter != currentCharacter || count === 9){
            runLengthEncoding.push(count);
            runLengthEncoding.push(previousCharacter);
            count = 0;
        }
    }
    count++;
    runLengthEncoding.push(count);
    runLengthEncoding.push(string[string.length - 1]);
    return runLengthEncoding.join('');
  }

}
