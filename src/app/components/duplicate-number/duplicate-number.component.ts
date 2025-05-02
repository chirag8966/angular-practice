import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duplicate-number',
  imports: [],
  templateUrl: './duplicate-number.component.html',
  styleUrl: './duplicate-number.component.scss'
})
export class DuplicateNumberComponent implements OnInit {

  private numArray = [1,3,3,5,7,8,9,9,4,4,5,11,12,14,45,14];
  duplicates: number[] = [];
  
  ngOnInit(): void {
    this.duplicates = this.getDuplicateNumbers(this.numArray);
  }

  getDuplicateNumbers(numbersArray: number[]): number[] {
    let duplicates: number[] = [];
    for (let i = 0; i < numbersArray.length; i++) {
      for (let j = i+1; j < numbersArray.length; j++) {
        if(numbersArray[i] === numbersArray[j]) {
          if(!duplicates.includes(numbersArray[i])) {
            duplicates.push(numbersArray[i]);
          }
        }
      }
    }
    return duplicates;
  }
 
}
