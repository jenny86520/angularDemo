import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.css'],
})
export class Demo5Component implements OnInit {
  msg: string = 'abcd';
  dateTimeNow: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
