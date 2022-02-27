import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-exercise',
  templateUrl: './small-exercise.component.html',
  styleUrls: ['./small-exercise.component.scss']
})
export class SmallExerciseComponent implements OnInit {

  animationVal:number=0;
  arrayInput:Array<any>=[];
  parsedArray:Array<any>=[];
  xs:Array<any>=['A', 'B', 'A', 'C', 'B'];

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
animateRight(el) {
  this.animationVal+=100;
  el.style.transform = "translateX(" + this.animationVal + "px)";
  el.style.transition = "transform 1s";
}
//Allows user to reset animation
resetAnimation(el){
  this.animationVal=0;
  el.style.transform = "translateX(" + this.animationVal + "px)"
}

// xs: array
// returns: a new array, with unique items
removeDuplicates(xs:Array<any>) {
  //make sure our input is an array
  this.arrayInput=xs
  //remove duplicates
  this.parsedArray=this.arrayInput;
  this.parsedArray=[...new Set(this.arrayInput)];
  //return parsed array
  return this.parsedArray
} 



}
