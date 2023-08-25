import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  // templateUrl: `<p>demo1 works!</p>`,
  styleUrls: ['./demo1.component.css'],
  // styles: [`
  //     h3 {
  //       color: dark;
  //     }`]
  // encapsulation: ViewEncapsulation.Emulated,
})
export class Demo1Component implements OnInit {
  name: string = 'Aka';
  propertyFlag: boolean = true;
  ngModuleData: string = 'ngModuleData';

  constructor() {}

  ngOnInit(): void {
    this.testStringInteroplation();
  }

  testStringInteroplation() {
    setTimeout(() => {
      this.name = 'Test Success!';
    }, 1000);
  }

  changeName() {
    this.name = 'Change Name Success!';
  }
}
