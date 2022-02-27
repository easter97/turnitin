import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigExerciseComponent } from './big-exercise.component';

describe('BigExerciseComponent', () => {
  let component: BigExerciseComponent;
  let fixture: ComponentFixture<BigExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
