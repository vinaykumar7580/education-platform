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

  loadCourses():void{
    this.courseService.getCourses().subscribe((courses)=>{
      this.courses=courses;
    })
  }

  deleteCourse(courseId:number):void{
    this.courseService.deleteCourse(courseId).subscribe(()=>{
      this.loadCourses();
    })
  }


}
