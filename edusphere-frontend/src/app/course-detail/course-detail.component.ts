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
  course: Course | null = null;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const courseIdParam = this.route.snapshot.paramMap.get('id');

    if (courseIdParam !== null) {
      const courseId = +courseIdParam;
      if (!isNaN(courseId)) {
        this.loadCourseDetails(courseId);
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
}
