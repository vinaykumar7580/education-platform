import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../instructor.service';
import { Department, DepartmentService } from '../department.service';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {
  instructors:any[]=[]
  departments:Department[]=[]

  constructor(private instructorService: InstructorService, private departmentService:DepartmentService){ }

  ngOnInit(): void {
    this.loadInstructors();
    this.fetchDepartments()
  }

  loadInstructors(): void {
    this.instructorService.getInstructors().subscribe(
      (data: any)=>{
        this.instructors=data;
      },
      (error)=>{
        console.error('Error loading instructors:', error)
      }
    )
  }

  deleteInstructor(id: number): void {
    if (confirm('Are you sure you want to delete this instructor?')){
      this.instructorService.deleteInstructor(id).subscribe(
        ()=>{
          this.loadInstructors();
        },
        (error)=>{
          console.error('Error deleting instructor:', error);
        }
      )
    }
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
