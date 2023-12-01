import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasssComponent } from './classs.component';

describe('ClasssComponent', () => {
  let component: ClasssComponent;
  let fixture: ComponentFixture<ClasssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasssComponent]
    });
    fixture = TestBed.createComponent(ClasssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
