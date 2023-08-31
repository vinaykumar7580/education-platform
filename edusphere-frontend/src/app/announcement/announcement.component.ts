// announcement.component.ts
import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcement.service';
import { DepartmentService } from '../department.service'; 
import { CourseService } from '../course.service';
import { Course, Department } from '../course.model';
import { Announcement } from '../announcement.model';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css'],
})
export class AnnouncementComponent implements OnInit {
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
