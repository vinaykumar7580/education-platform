// department.component.ts
import { Component, OnInit } from '@angular/core';
import { DepartmentService, Department } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  departments: Department[] = [];
  newDepartment: Department = { id: 0, name: '' };

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.fetchDepartments();
  }

  fetchDepartments(): void {
    this.departmentService.getDepartments().subscribe((departments) => {
      this.departments = departments;
    });
  }

  createDepartment(): void {
    this.departmentService.createDepartment(this.newDepartment).subscribe(() => {
      this.fetchDepartments();
      this.newDepartment.name = '';
    });
  }
}
