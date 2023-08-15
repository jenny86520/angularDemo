import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './components/demo2/demo2.component';
import { HighlightDirective } from './directives/highlight.directive';
import { Demo3Component } from './components/demo3/demo3.component';
import { Demo3FormComponent } from './components/demo3-form/demo3-form.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    HighlightDirective,
    Demo3Component,
    Demo3FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
