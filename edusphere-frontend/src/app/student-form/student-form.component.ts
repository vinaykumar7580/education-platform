import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentForm!: FormGroup;
  isEditMode=false;

  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private studentService:StudentService
  ) { }

  ngOnInit(): void {
    this.initForm();
    const studentIdParam = this.route.snapshot.paramMap.get('id');

    if (studentIdParam !== null) {
      const studentId = +studentIdParam;
      if (!isNaN(studentId)) {
        if (studentId === -1) {
          this.isEditMode = false;
        } else {
          this.isEditMode = true;
          this.loadStudentForEdit(studentId);
        }
      } else {
        console.error('Invalid student ID:', studentIdParam);
      }
    } else {
      console.error('Student ID is missing.');
    }
  }
  initForm():void{
    this.studentForm=this.formBuilder.group({
      name: ['', Validators.required],
      gender: [''],
      dob: [''],
      major: [''],
      email: ['', Validators.email],
      contact_number: ['']
    })
  }

  loadStudentForEdit(id:number): void{
    this.studentService.getStudent(id).subscribe(
      student=>{
        this.studentForm.patchValue(student);
      },
      error=>{
        console.error('Error loading student:', error)
      }
    )
  }

  saveStudent(): void{
    if(this.studentForm.valid){
      const studentData=this.studentForm.value;
      if(this.isEditMode){
        const studentId= +this.route.snapshot.paramMap.get('id')!;
        this.studentService.updateStudent(studentId, studentData).subscribe(
          ()=>{
            this.router.navigate(['/students']);
          },
          error=>{
            console.error('Error updating student:', error);
          }
        )
      }else{
        this.studentService.createStudent(studentData).subscribe(
          ()=>{
            this.router.navigate(['/students']);
          },
          error=>{
            console.error('Error creating student:', error);
          }
        )
      }
    }
  }

}
