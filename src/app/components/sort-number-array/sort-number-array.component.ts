import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-number-array',
  imports: [],
  templateUrl: './sort-number-array.component.html',
  styleUrl: './sort-number-array.component.scss'
})
export class SortNumberArrayComponent implements OnInit {
  sortedArray: number[] = [];

  ngOnInit(): void {
    this.sortedArray = this.getSortedArray([5,4,7,9,3,2,1]);
  }

  getSortedArray(array: number[]): number[] {
    const sortedArr: number[] = [];
    const temp = [...array];


    if(!Array.isArray(array) || array.some((el) => isNaN(el))) {
      throw new Error('the input is not numbers array')
    }

    for (let index = 0; index < array.length; index++) {
      const min = Math.min(...temp);
      sortedArr.push(min);
      temp.splice(temp.indexOf(min), 1);
    }

    return sortedArr;
  }

}
