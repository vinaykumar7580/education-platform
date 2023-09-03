import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from '../instructor.service';
import { Department, DepartmentService } from '../department.service';

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css'],
})
export class InstructorDetailComponent implements OnInit {
  instructor: any;
  departments:Department[]=[]

  constructor(
    private route: ActivatedRoute,
    private instructorService: InstructorService,
    private departmentService:DepartmentService
  ) {}


  ngOnInit(): void {
    const instructorIdParam = this.route.snapshot.paramMap.get('id');
    
    if (instructorIdParam !== null) {
      const instructorId = +instructorIdParam;
      if (!isNaN(instructorId)) {
        this.loadInstructor(instructorId);
        this.fetchDepartments()
      } else {
        console.error('Invalid instructor ID:', instructorIdParam);
        
      }
    } else {
      console.error('Instructor ID is missing.');
      
    }
  }
  

  loadInstructor(id: number): void {
    this.instructorService.getInstructor(id).subscribe(
      (instructor: any) => {
        this.instructor = instructor;
      },
      (error) => {
        console.error('Error loading instructor:', error);
      }
    );
  }

  fetchDepartments(): void {
    this.departmentService.getDepartments().subscribe((departments) => {
      this.departments = departments;
    });
  }

  getDepartmentNameById(departmentId: number): string {
    const department = this.departments.find(depart => depart.id === departmentId);
    return department ? department.name : 'Unknown Department';
  }
}
