import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularDemo';
  templates: string[] = [
    'Component_demo1',
    'Directive_demo2',
    'Component溝通_demo3',
    'Service_demo4',
    'Pipe_demo5',
    'Form/Template Driven Form',
    'Form/Reactive Form',
    'Router_Default',
  ];
  selectTemplate: string = this.templates[0];

  constructor(private router: Router) {}

  changeTemplate(value: string) {
    this.router.navigate([value]);
  }
}
