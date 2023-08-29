import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit{
  course: Course | undefined;
  courseId:number;

  constructor(private route:ActivatedRoute, private courseService:CourseService){ }

  ngOnInit(): void {
    this.courseId= +this.route.snapshot.paramMap.get('id');
    this.loadCourse();
  }

  loadCourse():void{
    this.courseService.getCourse(this.courseId).subscribe((course)=>{
      this.course=course;
    })
  }

}
