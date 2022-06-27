import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-palindrome-check',
  templateUrl: './palindrome-check.component.html',
  styleUrls: ['./palindrome-check.component.scss']
})
export class PalindromeCheckComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.isPalindrome('abcdcba'));
  }

  isPalindrome(string: string) {
    const stringLength = string.length;
    let lowIndex = 0;
    let highIndex = stringLength - 1;
    while (lowIndex < stringLength/2) {
      if (string[lowIndex] !== string[highIndex]) {
        return false;
      }
      lowIndex += 1;
      highIndex -= 1;
    }
    return true;
  }

}
