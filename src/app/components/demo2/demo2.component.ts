import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css'],
})
export class Demo2Component implements OnInit {
  count: number = 0;
  isRed: boolean = false;
  ngIfFlag: boolean = false;
  array: number[] = [1, 2, 3, 4, 5];
  number: string = '0';
  highlightColor = 'yellow';
  constructor() {}

  ngOnInit(): void {}

  add() {
    this.count++;
  }
  sub() {
    this.count--;
  }

  changeClass() {
    this.isRed = !this.isRed;
  }

  changeNgIfFlag() {
    this.ngIfFlag = !this.ngIfFlag;
  }

  push() {
    this.array.push(+this.number);
  }

  remove() {
    this.array = this.array.filter((x) => x !== +this.number);
  }

  changeHighlightColor() {
    this.highlightColor = this.highlightColor === 'yellow' ? 'red' : 'yellow';
  }
}
