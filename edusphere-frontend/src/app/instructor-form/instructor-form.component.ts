import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InstructorService } from '../instructor.service';
import { Department  } from '../course.model';

@Component({
  selector: 'app-instructor-form',
  templateUrl: './instructor-form.component.html',
  styleUrls: ['./instructor-form.component.css'],
})
export class InstructorFormComponent implements OnInit {
  instructorForm!: FormGroup;
  isEditMode = false;
  departments: Department[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private instructorService: InstructorService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadDepartments();
    
    const instructorIdParam = this.route.snapshot.paramMap.get('id');

    if (instructorIdParam !== null) {
      const instructorId = +instructorIdParam;
      if (!isNaN(instructorId)) {
        if (instructorId === -1) {
          this.isEditMode = false;
        } else {
          this.isEditMode = true;
          this.loadInstructorForEdit(instructorId);
        }
      } else {
        console.error('Invalid instructor ID:', instructorIdParam);
      }
    } else {
      console.error('Instructor ID is missing.');
    }
  }

  initForm(): void {
    this.instructorForm = this.formBuilder.group({
      name: ['', Validators.required],
      gender: [''],
      dob: [''],
      department: [''],
      email: ['', Validators.email],
      contact_number: [''],
    });
  }

  loadDepartments(): void {
    this.instructorService.getDepartments().subscribe(
      (departments: Department[]) => {
        this.departments = departments;
      },
      (error) => {
        console.error('Error loading departments:', error);
      }
    );
  }

  loadInstructorForEdit(id: number): void {
    this.instructorService.getInstructor(id).subscribe(
      (instructor: any) => {
        this.instructorForm.patchValue(instructor);
      },
      (error) => {
        console.error('Error loading instructor:', error);
      }
    );
  }

  saveInstructor(): void {
    if (this.instructorForm.valid) {
      const instructorData = this.instructorForm.value;
      if (this.isEditMode) {
        const instructorId = +this.route.snapshot.paramMap.get('id')!;
        this.instructorService
          .updateInstructor(instructorId, instructorData)
          .subscribe(
            () => {
              this.router.navigate(['/instructors']);
            },
            (error) => {
              console.error('Error updating instructor:', error);
            }
          );
      } else {
        this.instructorService.createInstructor(instructorData).subscribe(
          () => {
            this.router.navigate(['/instructors']);
          },
          (error) => {
            console.error('Error creating instructor:', error);
          }
        );
      }
    }
  }
}
