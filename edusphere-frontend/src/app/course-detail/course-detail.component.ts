import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { AssignmentService } from '../assignment.service';
import { Department } from '../department.service';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit{
  course: Course | null = null;
  assignments: any[] = [];
  departments: Department[]=[]
  

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private assignmentService: AssignmentService,
    private departmentService:DepartmentService
    
  ) {}

  ngOnInit(): void {
    const courseIdParam = this.route.snapshot.paramMap.get('id');

    if (courseIdParam !== null) {
      const courseId = +courseIdParam;
      if (!isNaN(courseId)) {
        this.loadCourseDetails(courseId);
        this.fetchAssignments(courseId);
        this.fetchDepartments();
      } else {
        console.error('Invalid course ID:', courseIdParam);
      }
    } else {
      console.error('Course ID is missing.');
    }

    
  }

  loadCourseDetails(courseId: number): void {
    this.courseService.getCourse(courseId).subscribe(
      (course: Course) => {
        this.course = course;
      },
      (error) => {
        console.error('Error loading course details:', error);
      }
    );
  }

  fetchAssignments(courseId: number): void {
    this.assignmentService
      .getAssignmentsForCourse(courseId)
      .subscribe((assignments) => {
        this.assignments = assignments;
        console.log("ddddddddddd", this.assignments)
      },
      (error) => {
        console.error('Error loading course details:', error);
      }
      );
  }

  fetchDepartments(): void {
    this.departmentService.getDepartments().subscribe((departments) => {
      this.departments = departments;
    });
  }

  getDepartmentNameById(departmentId: any): string {
    const department = this.departments.find(depart => depart.id === departmentId);
    return department ? department.name : 'Unknown Department';
  }
 


}
