// assignment.component.ts
import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../assignment.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
})
export class AssignmentComponent implements OnInit {
  assignments: any[] = [];
  newAssignment: any = {};
  courses: any[] = [];

  constructor(private assignmentService: AssignmentService, private courseService: CourseService ) {}

  ngOnInit(): void {
    this.fetchAssignments();
    this.fetchCourses();
  }

  fetchAssignments(): void {
    this.assignmentService.getAssignments().subscribe((assignments) => {
      this.assignments = assignments;
    });
  }

  createAssignment(): void {
    this.assignmentService.createAssignment(this.newAssignment).subscribe(() => {
      this.fetchAssignments();
      this.newAssignment = {};
    });
  }

  updateAssignment(assignmentId: number, updatedAssignment: any): void {
    this.assignmentService.updateAssignment(assignmentId, updatedAssignment).subscribe(() => {
      this.fetchAssignments();
    });
  }

  deleteAssignment(assignmentId: number): void {
    this.assignmentService.deleteAssignment(assignmentId).subscribe(() => {
      this.fetchAssignments();
    });
  }

  fetchCourses(): void {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }
  
}
