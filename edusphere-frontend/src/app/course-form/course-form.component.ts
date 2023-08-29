import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../course.service';
import { Department } from '../course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit{
  courseForm!: FormGroup;
  isEditMode = false;
  departments: Department[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadDepartments();
  
    const courseIdParam = this.route.snapshot.paramMap.get('id');
    if (courseIdParam !== null) {
      const courseId = +courseIdParam;
      if (!isNaN(courseId)) {
        this.isEditMode = true;
        this.loadCourseForEdit(courseId);
      }
    }
  }

  initForm(): void {
    this.courseForm = this.formBuilder.group({
      course_code: ['', Validators.required],
      course_name: ['', Validators.required],
      department: [null, Validators.required],
      credits: ['', Validators.required],
      description: ['']
    });
  }

  loadDepartments(): void {
    this.courseService.getDepartments().subscribe(
      (departments: Department[]) => {
        this.departments = departments;
      },
      (error) => {
        console.error('Error loading departments:', error);
      }
    );
  }

  loadCourseForEdit(courseId: number): void {
    this.courseService.getCourse(courseId).subscribe(
      (course) => {
        this.courseForm.patchValue(course);
      },
      (error) => {
        console.error('Error loading course:', error);
      }
    );
  }

  saveCourse(): void {
    if (this.courseForm.valid) {
      const courseData = this.courseForm.value;
      if (this.isEditMode) {
        const courseId = +this.route.snapshot.paramMap.get('id')!;
        this.courseService.updateCourse(courseId, courseData).subscribe(
          () => {
            this.router.navigate(['/courses']);
          },
          (error) => {
            console.error('Error updating course:', error);
          }
        );
      } else {
        this.courseService.createCourse(courseData).subscribe(
          () => {
            this.router.navigate(['/courses']);
          },
          (error) => {
            console.error('Error creating course:', error);
          }
        );
      }
    }
  }




}
