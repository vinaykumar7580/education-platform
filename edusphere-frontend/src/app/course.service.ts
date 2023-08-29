import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course.model';
import { Department } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl="http://127.0.0.1:8000/api/courses/";
  private departUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http:HttpClient) { }

  //get all courses
  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(this.baseUrl)
  }

  //get single course by ID
  getCourse(id:number): Observable<Course>{
    const url = `${this.baseUrl}${id}/`;
    return this.http.get<Course>(url);
  }

  createCourse(courseData: Course): Observable<Course>{
    return this.http.post<Course>(this.baseUrl, courseData)
  }

  updateCourse(id: number, courseData: Course): Observable<Course> {
    const url = `${this.baseUrl}${id}/`;
    return this.http.put<Course>(url, courseData);
  }

  deleteCourse(id: number): Observable<void> {
    const url = `${this.baseUrl}${id}/`;
    return this.http.delete<void>(url);
  }
  getDepartments(): Observable<Department[]> {
    const url = `${this.departUrl}departments/`; 
    return this.http.get<Department[]>(url);
  }
}
