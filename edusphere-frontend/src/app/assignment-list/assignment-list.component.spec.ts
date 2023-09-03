import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentListComponent } from './assignment-list.component';

describe('AssignmentListComponent', () => {
  let component: AssignmentListComponent;
  let fixture: ComponentFixture<AssignmentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentListComponent]
    });
    fixture = TestBed.createComponent(AssignmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
