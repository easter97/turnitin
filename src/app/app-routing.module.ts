import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmallExerciseComponent} from './small-exercise/small-exercise.component'


const routes: Routes = [
  { path: 'small-exercise', component: SmallExerciseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
