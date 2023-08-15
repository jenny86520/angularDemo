import { Component, EventEmitter, Input, OnInit, Output, ElementRef, ContentChild } from '@angular/core';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-demo3-form',
  templateUrl: './demo3-form.component.html',
  styleUrls: ['./demo3-form.component.css']
})
export class Demo3FormComponent implements OnInit {
  @Input() person: Person = { account: '', password: '' };
  @Output() submit = new EventEmitter<Person>();

  @ContentChild('contentTarget') content?: ElementRef;

  person_: Person = { account: '', password: '' };

  constructor() { }

  ngOnInit(): void {
    this.person_ = { ...this.person };
  }

  formClick() {
    this.submit.emit(this.person_);
  }
}
