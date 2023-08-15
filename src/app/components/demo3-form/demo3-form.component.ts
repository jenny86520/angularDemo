import { Component, EventEmitter, Input, OnInit, Output, ElementRef, ContentChild, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-demo3-form',
  templateUrl: './demo3-form.component.html',
  styleUrls: ['./demo3-form.component.css']
})
export class Demo3FormComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() person: Person = { account: '', password: '' };
  @Output() submit = new EventEmitter<Person>();

  @ContentChild('contentTarget') content?: ElementRef;

  person_: Person = { account: '', password: '' };

  // Lifecycle
  constructor() {
    console.log('Constructor');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }
  ngOnInit(): void {
    this.person_ = { ...this.person };
    console.log('ngOnInit');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  formClick() {
    this.submit.emit(this.person_);
  }
}
