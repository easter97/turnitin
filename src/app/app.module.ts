import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmallExerciseComponent } from './small-exercise/small-exercise.component';
import { BigExerciseComponent } from './big-exercise/big-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    SmallExerciseComponent,
    BigExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
