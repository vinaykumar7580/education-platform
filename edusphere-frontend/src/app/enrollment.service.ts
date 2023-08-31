import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  getAvailableCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}courses/`);
  }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}students/`);
  }

  enrollStudent(courseId: number, studentId: number): Observable<any> {
    const enrollmentData = { course: courseId, student: studentId };
    return this.http.post<any>(`${this.baseUrl}enrollments/`, enrollmentData);
  }

  getEnrollments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}enrollments/`);
  }

  getStudentsByIds(studentIds: number[]): Observable<any[]> {
    const url = `${this.baseUrl}students/`; // Adjust the endpoint URL
    const params = { ids: studentIds.join(',') }; // Convert studentIds array to comma-separated string
    return this.http.get<any[]>(url, { params });
  }

  getCoursesByIds(courseIds: number[]): Observable<any[]> {
    const url = `${this.baseUrl}courses/`; // Adjust the endpoint URL
    const params = { ids: courseIds.join(',') }; // Convert courseIds array to comma-separated string
    return this.http.get<any[]>(url, { params });
  }
}
