import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {
  person: Person = { account: 'Aka', password: '1234' };

  constructor() { }

  ngOnInit(): void {
  }

  setPerson(event: Person) {
    this.person = event;
  }
}
