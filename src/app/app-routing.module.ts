import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmallExerciseComponent} from './small-exercise/small-exercise.component'
import { BigExerciseComponent } from './big-exercise/big-exercise.component'


const routes: Routes = [
  { path: 'small-exercise', component: SmallExerciseComponent },
  { path: 'big-exercise', component: BigExerciseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
