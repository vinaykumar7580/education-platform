import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorFormComponent } from './instructor-form.component';

describe('InstructorFormComponent', () => {
  let component: InstructorFormComponent;
  let fixture: ComponentFixture<InstructorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorFormComponent]
    });
    fixture = TestBed.createComponent(InstructorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
