import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { InstructorDetailComponent } from './instructor-detail/instructor-detail.component';
import { InstructorFormComponent } from './instructor-form/instructor-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { EnrollmentListComponent } from './enrollment-list/enrollment-list.component';

import { FormsModule } from '@angular/forms';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { SubmissionComponent } from './submission/submission.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { DepartmentComponent } from './department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructorListComponent,
    InstructorDetailComponent,
    InstructorFormComponent,
    CourseListComponent,
    CourseDetailComponent,
    CourseFormComponent,
    StudentListComponent,
    StudentDetailComponent,
    StudentFormComponent,
    EnrollmentListComponent,
    EnrollmentComponent,
    AssignmentComponent,
    SubmissionComponent,
    AnnouncementComponent,
    DepartmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
