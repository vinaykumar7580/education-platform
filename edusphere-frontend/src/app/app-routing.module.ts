import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { InstructorDetailComponent } from './instructor-detail/instructor-detail.component';
import { InstructorFormComponent } from './instructor-form/instructor-form.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { EnrollmentListComponent } from './enrollment-list/enrollment-list.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { SubmissionComponent } from './submission/submission.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  { path: 'instructors', component: InstructorListComponent },
  { path: 'instructors/new', component: InstructorFormComponent },
  { path: 'instructors/:id', component: InstructorDetailComponent },
  { path: 'instructors/:id/edit', component: InstructorFormComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/new', component: CourseFormComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'courses/:id/edit', component: CourseFormComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'students/new', component: StudentFormComponent },
  { path: 'students/:id', component: StudentDetailComponent },
  { path: 'students/:id/edit', component: StudentFormComponent },
  { path: 'enroll', component: EnrollmentComponent },
  { path: 'enrollment-list', component: EnrollmentListComponent },
  { path: 'assignments', component: AssignmentComponent },
  { path: 'assignments/:id', component: AssignmentComponent },
  { path: 'submissions', component: SubmissionComponent },
  { path: 'announcements', component: AnnouncementComponent },
  { path: 'departments', component: DepartmentComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
