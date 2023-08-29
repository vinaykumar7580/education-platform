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
  //departments: Department[] = [];
  isEditMode = false;
  //courseId:number;

  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.initForm();
    //this.loadDepartments();
    const courseIdParam=this.route.snapshot.paramMap.get('id');

    if(courseIdParam !== null){
      const courseId= +courseIdParam;
      if(!isNaN(courseId)){
        if(courseId === -1){
          this.isEditMode=false;

        }else{
          this.isEditMode = true;
          //this.loadCourseForEdit(courseId);

        }
      }else{
        console.error('Invalid course ID:', courseIdParam);
      }
    }else{
      console.error('Course ID is missing.');
    }
  }

  //form handle
  initForm():void{
    this.courseForm=this.formBuilder.group({
      course_code: ['', Validators.required],
      course_name: ['', Validators.required],
      department: [null, Validators.required],
      credits: ['', Validators.required],
      description: ['']
    })

  }





}
