import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../submission.service';
import { AssignmentService } from '../assignment.service';
import { StudentService } from '../student.service';
import { Submission } from '../submission.model';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit{
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
    private studentService: StudentService
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
