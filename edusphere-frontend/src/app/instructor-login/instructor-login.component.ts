import { Component } from '@angular/core';
import { InstructorService } from '../instructor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-login',
  templateUrl: './instructor-login.component.html',
  styleUrls: ['./instructor-login.component.css']
})
export class InstructorLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private instructorService: InstructorService, private router: Router) {}

  login(): void {
    this.instructorService.getInstructors().subscribe(instructors => {
      const matchedInstructor = instructors.find(instructor => instructor.email === this.email && instructor.password === this.password);

      if (matchedInstructor) {
       alert("Instructor Login Successful")
        this.router.navigate(['/instructors']);
      } else {
        // Failed login
        alert('Invalid email or password');
      }
    });
  }
}
