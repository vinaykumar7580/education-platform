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
import { HomeComponent } from './home/home.component';
import { SubmissionFormComponent } from './submission-form/submission-form.component';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { InstructorLoginComponent } from './instructor-login/instructor-login.component';

const routes: Routes = [
  { path: 'instructors', component: InstructorListComponent },
  { path: 'instructors/new', component: InstructorFormComponent },
  { path: 'instructors/login', component: InstructorLoginComponent },
  { path: 'instructors/:id', component: InstructorDetailComponent },
  { path: 'instructors/:id/edit', component: InstructorFormComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/new', component: CourseFormComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'courses/:id/edit', component: CourseFormComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'students/new', component: StudentFormComponent },
  { path: 'students/login', component: StudentLoginComponent },
  { path: 'students/:id', component: StudentDetailComponent },
  { path: 'students/:id/edit', component: StudentFormComponent },
  { path: 'enroll', component: EnrollmentComponent },
  { path: 'enrollment-list', component: EnrollmentListComponent },
  { path: 'assignments', component: AssignmentComponent },
  { path: 'assignments/:id', component: AssignmentComponent },
  { path: 'assignments-list', component: AssignmentListComponent },
  { path: 'submissions', component: SubmissionComponent },
  { path: 'submissions-form', component: SubmissionFormComponent},
  { path: 'announcements', component: AnnouncementComponent },
  { path: 'announcements-list', component: AnnouncementListComponent },
  { path: 'departments', component: DepartmentComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
