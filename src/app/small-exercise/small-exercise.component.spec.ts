import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallExerciseComponent } from './small-exercise.component';

describe('SmallExerciseComponent', () => {
  let component: SmallExerciseComponent;
  let fixture: ComponentFixture<SmallExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
