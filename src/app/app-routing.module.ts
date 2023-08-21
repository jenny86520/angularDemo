import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { Demo3Component } from './components/demo3/demo3.component';
import { Demo4Component } from './components/demo4/demo4.component';
import { Demo5Component } from './components/demo5/demo5.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { DefaultComponent } from './components/default/default.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Component_demo1',
    pathMatch: 'full',
  },
  { path: 'Component_demo1', component: Demo1Component },
  { path: 'Directive_demo2', component: Demo2Component },
  { path: 'Component溝通_demo3', component: Demo3Component },
  { path: 'Service_demo4', component: Demo4Component },
  { path: 'Pipe_demo5', component: Demo5Component },
  {
    path: 'Form',
    children: [
      { path: 'Template Driven Form', component: TemplateDrivenFormComponent },
      { path: 'Reactive Form', component: ReactiveFormComponent },
    ],
  },
  { path: 'Router_Default/:id', component: DefaultComponent},
  { path: '**', component: DefaultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
