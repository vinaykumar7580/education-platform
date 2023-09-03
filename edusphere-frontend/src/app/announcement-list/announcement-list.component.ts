import { Component, OnInit } from '@angular/core';
import { Department, DepartmentService } from '../department.service';
import { Course } from '../course.model';
import { AnnouncementService } from '../announcement.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent implements OnInit{
  departments: Department[] = [];
  courses: Course[] = [];
  announcements: any = [];
  newAnnouncement: any = {
    id: 0,
    title: '',
    description: '',
    publish_date: new Date(),
    department: 0,
    course: 0,
  };

  constructor(
    private announcementService: AnnouncementService,
    private departmentService: DepartmentService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.fetchDepartments();
    this.fetchCourses();
    this.fetchAnnouncements();
  }

  fetchDepartments(): void {
    this.departmentService.getDepartments().subscribe((departments) => {
      this.departments = departments;
    });
  }

  fetchCourses(): void {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  fetchAnnouncements(): void {
    this.announcementService.getAnnouncements().subscribe((announcements) => {
      this.announcements = announcements;
      console.log("announce", this.announcements)
    });
  }

  createAnnouncement(): void {
    this.announcementService.createAnnouncement(this.newAnnouncement).subscribe(() => {
      this.fetchAnnouncements();
      this.newAnnouncement = {
        id: 0,
        title: '',
        description: '',
        publish_date: new Date(),
        department: 0,
        course: 0,
      };
    });
  }

  getDepartmentName(departmentId: number): string {
    const department = this.departments.find((d) => d.id === departmentId);
    return department ? department.name : '';
  }

  getCourseName(courseId: number): string {
    const course = this.courses.find((c) => c.id === courseId);
    return course ? course.course_name : '';
  }

}
