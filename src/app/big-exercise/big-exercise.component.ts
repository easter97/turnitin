import { Component, OnInit } from '@angular/core';
import { FetchService } from './fetch.service';
import { Observable } from 'rxjs';

export interface Dog{
  image:string;
  breed:string;
}
@Component({
  selector: 'app-big-exercise',
  templateUrl: './big-exercise.component.html',
  styleUrls: ['./big-exercise.component.scss']
})

export class BigExerciseComponent implements OnInit {

  sitStay:Observable<any>;
  fetchDoggies:Observable<any>;
  doggieDayCare:Array<Dog>=[];
  goodBoy:Dog={image:'', breed:''};

  constructor(private fetchService:FetchService) { }

  ngOnInit(): void {
    //fetch feature dog
    this.updateGoodBoy();
    //fetch dog links
    this.fetchDoggies=this.fetchService.fetchMultiple(10);
    this.fetchDoggies.subscribe( dogs =>
      {
        for(let i=0; i<dogs.message.length; i++){
          this.doggieDayCare.push(this.createDog(dogs.message[i]));
        }
      },
      error => {
        console.log("There was an error recieved from the Dog Api")
      }
      );
    
    
  }
  createDog(dog){
    //initialize dog
    let doggo:Dog={image:'', breed:''};
    //set image
    doggo.image=dog;
    //get breed from url
    doggo.breed=dog.match(/breeds\/(.*)\//)[1];
    return doggo;
  }
  updateGoodBoy(){
    this.sitStay=this.fetchService.fetchGoodBoy();
   this.sitStay.subscribe( dog => 
    {
      this.goodBoy=this.createDog(dog.message);
    },
    error => {
      console.log("There was an error recieved from the Dog Api")
    }
    );
  }

}
