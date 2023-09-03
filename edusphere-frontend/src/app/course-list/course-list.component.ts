import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import { DepartmentService } from '../department.service';
import { Department } from '../department.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{
  courses: Course[]=[];
  departments: Department[]=[]
  

  constructor(private courseService: CourseService, private departmentService:DepartmentService){ }

  ngOnInit(): void {
    this.loadCourses();
    this.fetchDepartments();
    
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe(
      (courses: Course[]) => {
        this.courses = courses;
        console.log("data",this.courses)
      },
      (error) => {
        console.error('Error loading courses:', error);
      }
    );
  }

  deleteCourse(id: number): void {
    this.courseService.deleteCourse(id).subscribe(
      () => {
        this.loadCourses();
      },
      (error) => {
        console.error('Error deleting course:', error);
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
