import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {
  instructors:any[]=[]

  constructor(private instructorService: InstructorService){ }

  ngOnInit(): void {
    this.loadInstructors();
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

}
