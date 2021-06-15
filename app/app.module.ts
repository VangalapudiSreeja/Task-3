import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { AllDevelopersComponent } from './all-developers/all-developers.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AllDevelopersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
