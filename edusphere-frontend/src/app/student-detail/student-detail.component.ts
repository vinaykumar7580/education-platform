import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit{
  student: Student | undefined;

  constructor(private route: ActivatedRoute, private studentService:StudentService){ }

  ngOnInit(): void {
    const studentIdParam = this.route.snapshot.paramMap.get('id');
    if(studentIdParam !== null){
      const studentId=+studentIdParam;
      if(!isNaN(studentId)){
        this.studentService.getStudent(studentId).subscribe(
          (student:any)=>{
            this.student=student;
          },
          (error)=>{
            console.error('Error loading student:', error);
          }
        )
      }else{
        console.error('Invalid student ID:', studentIdParam);
      }
    }else{
      console.error('Student ID is missing.');
    }
    
  }

  loadStudent(id:number): void{
    this.studentService.getStudent(id).subscribe(
      student=>{
        this.student=student;
      },
      error=>{
        console.error("Error loading student:", error)
      }
    )
  }

}
