import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-exercise',
  templateUrl: './small-exercise.component.html',
  styleUrls: ['./small-exercise.component.scss']
})
export class SmallExerciseComponent implements OnInit {

  animationVal:number=0;

  constructor() { }

  ngOnInit(): void {
  }

// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
} 
//Attaches function to user input
runDelay(ms){
  this.delay(ms).then(() => console.log('Promise resolved'));
}

// el: element node object
// moves the element to the right by 100px over a duration of 1 second
animateRight(el:HTMLElement) {
  this.animationVal+=100;
  el.style.transform = "translateX(" + this.animationVal + "px)"
}
//Allows user to reset animation
resetAnimation(el){
  this.animationVal=0;
  el.style.transform = "translateX(" + this.animationVal + "px)"
}


}
