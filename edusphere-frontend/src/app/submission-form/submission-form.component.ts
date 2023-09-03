import { Component, OnInit } from '@angular/core';
import { Submission } from '../submission.model';
import { SubmissionService } from '../submission.service';
import { AssignmentService } from '../assignment.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-submission-form',
  templateUrl: './submission-form.component.html',
  styleUrls: ['./submission-form.component.css']
})
export class SubmissionFormComponent implements OnInit{
  newSubmission: Submission = { 
    submission_date: '',
    status: 'Submitted',
    remarks: '',
    assignment: 0,
    student: 0
  };

  assignments: any[] = [];
  students: any[] = [];
  submissions: any[] = [];

  constructor(
    private submissionService: SubmissionService,
    private assignmentService: AssignmentService,
    private studentService: StudentService,
  ) {}

  ngOnInit(): void {
    this.fetchAssignments();
    this.fetchStudents();
    this.fetchSubmissions();
  }

  fetchAssignments(): void {
    this.assignmentService.getAssignments().subscribe(assignments => {
      this.assignments = assignments;
    });
  }

  fetchStudents(): void {
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
    });
  }
  fetchSubmissions(): void {
    this.submissionService.getSubmissions().subscribe((submissions) => {
      this.submissions = submissions;
    });
  }

  createSubmission(): void {
    this.submissionService.createSubmission(this.newSubmission).subscribe(() => {
      alert('Submission created successfully.');
      // Clear the form after submission
      

      this.newSubmission = {
        submission_date: '',
        status: 'Submitted',
        remarks: '',
        assignment: 0,
        student: 0
      };

      this.fetchSubmissions();
    });
  }

  
  
  getStudentById(studentId: number): string {
    const student = this.students.find(student => student.id === studentId);
    return student ? student.name : 'Unknown Student';
  }

  getAssignmentById(assignmentId: number): string {
    const assignment = this.assignments.find(ass => ass.id === assignmentId);
    return assignment ? assignment.title : 'Unknown Student';
  }

}
