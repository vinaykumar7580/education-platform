import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{
  courses: Course[]=[];

  constructor(private courseService: CourseService){ }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe(
      (courses: Course[]) => {
        this.courses = courses;
        //console.log("data",this.courses)
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


}
