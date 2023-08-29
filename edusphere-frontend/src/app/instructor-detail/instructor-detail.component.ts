import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css'],
})
export class InstructorDetailComponent implements OnInit {
  instructor: any;

  constructor(
    private route: ActivatedRoute,
    private instructorService: InstructorService
  ) {}

  // ngOnInit(): void {
  //   const instructorIdParam = this.route.snapshot.paramMap.get('id');
  //   if (instructorIdParam !== null) {
  //     const instructorId = +instructorIdParam;
  //     this.loadInstructor(instructorId);
  //   } else {
  //     console.error('Instructor ID is missing.');

  //   }
  // }

  // loadInstructor(id: number): void {
  //   this.instructorService.getInstructor(id).subscribe(
  //     (data: any) => {
  //       this.instructor = data;
  //     },
  //     (error) => {
  //       console.log('Error loading instructor:', error);
  //     }
  //   );
  // }

  ngOnInit(): void {
    const instructorIdParam = this.route.snapshot.paramMap.get('id');
    
    if (instructorIdParam !== null) {
      const instructorId = +instructorIdParam;
      if (!isNaN(instructorId)) {
        this.loadInstructor(instructorId);
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
}
