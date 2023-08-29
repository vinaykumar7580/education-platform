import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { InstructorDetailComponent } from './instructor-detail/instructor-detail.component';
import { InstructorFormComponent } from './instructor-form/instructor-form.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

const routes: Routes = [
  { path: 'instructors', component: InstructorListComponent },
  { path: 'instructors/new', component: InstructorFormComponent },
  { path: 'instructors/:id', component: InstructorDetailComponent },
  { path: 'instructors/:id/edit', component: InstructorFormComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/new', component: CourseFormComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'courses/:id/edit', component: CourseFormComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
