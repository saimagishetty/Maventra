import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningPlanComponent } from './learning-plan.component';

describe('LearningPlanComponent', () => {
  let component: LearningPlanComponent;
  let fixture: ComponentFixture<LearningPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearningPlanComponent]
    });
    fixture = TestBed.createComponent(LearningPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
