import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  availableCourses: any[] = [];
  selectedCourseId: number | null = null;
  selectedStudentId: number | null = null;
  students: any[] = []; // Fetch students from the backend

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.enrollmentService.getAvailableCourses().subscribe(
      courses => {
        this.availableCourses = courses;
      },
      error => {
        console.error('Error fetching available courses:', error);
      }
    );

    // Fetch students from the backend
    this.enrollmentService.getStudents().subscribe(
      students => {
        this.students = students;
      },
      error => {
        console.error('Error fetching students:', error);
      }
    );
  }

  enrollStudent(): void {
    if (this.selectedCourseId !== null && this.selectedStudentId !== null) {
      this.enrollmentService
        .enrollStudent(this.selectedCourseId, this.selectedStudentId)
        .subscribe(
          () => {
            console.log('Enrollment successful');
            alert('Enrollment successful')
            
          },
          error => {
            console.error('Error enrolling student:', error);
          }
        );
    }
  }
}
