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
import { Demo3InteractionComponent } from './components/demo3-interaction/demo3-interaction.component';
import { Demo4Component } from './components/demo4/demo4.component';
import { HttpClientModule } from '@angular/common/http';
import { Demo5Component } from './components/demo5/demo5.component';
import { WordPipe } from './pipes/word.pipe';
@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    HighlightDirective,
    Demo3Component,
    Demo3FormComponent,
    Demo3InteractionComponent,
    Demo4Component,
    Demo5Component,
    WordPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
