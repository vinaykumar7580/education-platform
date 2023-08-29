import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDetailComponent } from './instructor-detail.component';

describe('InstructorDetailComponent', () => {
  let component: InstructorDetailComponent;
  let fixture: ComponentFixture<InstructorDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorDetailComponent]
    });
    fixture = TestBed.createComponent(InstructorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
