

import { Component, NgZone, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.css']
})
export class EnrollmentListComponent implements OnInit {
  enrollments: any[] = [];
  students: any[] = [];
  courses: any[] = [];
  courseStudentMap: Map<string, string[]> = new Map();

  constructor(private enrollmentService: EnrollmentService, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.fetchEnrollments();
  }

  fetchEnrollments(): void {
    this.enrollmentService.getEnrollments().subscribe(
      enrollments => {
        this.enrollments = enrollments;
        const studentIds = enrollments.flatMap(enrollment => enrollment.students);
        const courseIds = enrollments.map(enrollment => enrollment.course);

        this.enrollmentService.getStudentsByIds(studentIds).subscribe(
          students => {
            this.students = students;
            console.log("v", this.students);
            this.groupStudentsByCourse();
          },
          error => {
            console.error('Error fetching students:', error);
          }
        );

        this.enrollmentService.getCoursesByIds(courseIds).subscribe(
          courses => {
            this.courses = courses;
            this.groupStudentsByCourse();
          },
          error => {
            console.error('Error fetching courses:', error);
          }
        );
      },
      error => {
        console.error('Error fetching enrollments:', error);
      }
    );
  }

  groupStudentsByCourse(): void {
    this.courseStudentMap.clear(); 

    for (const enrollment of this.enrollments) {
      const courseName = this.getCourseNameById(enrollment.course);
      const studentName = this.getStudentNameById(enrollment.student);

      if (!this.courseStudentMap.has(courseName)) {
        this.courseStudentMap.set(courseName, []);
      }

      const studentNames = this.courseStudentMap.get(courseName);
      if (studentNames && !studentNames.includes(studentName)) {
        studentNames.push(studentName);
      }
      
    }
    
    
  }

  getStudentNameById(studentId: number): string {
    const student = this.students.find(student => student.id === studentId);
    return student ? student.name : 'Unknown Student';
  }

  getCourseNameById(courseId: number): string {
    const course = this.courses.find(course => course.id === courseId);
    return course ? course.course_name : 'Unknown Course';
  }
}

