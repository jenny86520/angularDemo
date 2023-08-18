import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularDemo';
  selectTemplate: number = 0;
  templates: string[] = [
    'Component_demo1',
    'Directive_demo2',
    'Component 溝通_demo3',
    'Service_demo4',
    'Pipe_demo5',
    'Template Driven Form',
  ];
}
