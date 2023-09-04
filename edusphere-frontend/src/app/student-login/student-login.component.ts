import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private studentService: StudentService, private router: Router) {}

  login(): void {
    this.studentService.getStudents().subscribe(students => {
      const matchedStudent = students.find(student => student.email === this.email && student.password === this.password);

      if (matchedStudent) {
        alert("Student Login Successful")
        this.router.navigate(['/enroll']);
      } else {
        // Failed login
        alert('Invalid email or password');
      }
    });
  }

}
