import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-exercise',
  templateUrl: './small-exercise.component.html',
  styleUrls: ['./small-exercise.component.scss']
})
export class SmallExerciseComponent implements OnInit {
  wait:boolean=false;
  animationVal:number=0;
  arrayInput:Array<any>=[];
  parsedArray:Array<any>=[];

  constructor() { }

  ngOnInit(): void {
  }

// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
delay(ms) {
  this.wait=true;
  return new Promise(resolve => setTimeout(resolve, ms));
} 
//Attaches function to user input
runDelay(ms){
  this.delay(ms).then(() => {
    alert('Your promise has resolved')
    this.wait=false;
  });
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
removeDuplicates(xs) {
  this.parsedArray=[...new Set(xs)];
  //return parsed array
  return this.parsedArray
} 
//adding this duplicate helper so that we can make sure the front-end input works with our function
duplicateHelper(input){
  let xs=input.split(',')
  //store input to display before/after
  this.arrayInput=xs
  //set a new array for removed duplicates to show after
  this.parsedArray=this.arrayInput;
  this.removeDuplicates(xs);
}



}
