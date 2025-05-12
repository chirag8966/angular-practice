import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnInit{
 @Input('gridNumber') set fillArray(number: number) {
  this.gridSize = number > 0 ? number : 0;
  this.arrayElem = Array(this.gridSize * this.gridSize).fill(0);
 } 

 gridSize!: number;
 arrayElem: number[] = [];
 cellColors: string[] = [];
 currentIndex: number = 0;
 private intervalId: any;

 ngOnInit() {
   this.startColoring();
 }

 ngOnDestroy() {
   if (this.intervalId) {
     clearInterval(this.intervalId);
   }
 }

 startColoring() {
   this.intervalId = setInterval(() => {
     if (this.currentIndex < this.arrayElem.length) {
       this.cellColors[this.currentIndex] = 'green';
       this.currentIndex++;
     } else {
       this.currentIndex = 0;
       this.cellColors = Array(this.gridSize * this.gridSize).fill('#fffff');
     }
   }, 200);
 }

}
