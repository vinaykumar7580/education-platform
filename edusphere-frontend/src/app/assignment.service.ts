// assignment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssignmentService {
  private baseUrl = 'http://127.0.0.1:8000/api/'; 
  

  constructor(private http: HttpClient) {}

  getAssignmentsForCourse(courseId: number): Observable<any[]> {
    const url = `${this.baseUrl}assignments/`;
    return this.http.get<any[]>(url);
  }

  createAssignment(assignment: any): Observable<any> {
    const url = `${this.baseUrl}assignments/`;
    return this.http.post<any>(url, assignment);
  }

  updateAssignment(assignmentId: number, updatedAssignment: any): Observable<any> {
    const url = `${this.baseUrl}assignments/${assignmentId}/`;
    return this.http.patch<any>(url, updatedAssignment);
  }

  deleteAssignment(assignmentId: number): Observable<any> {
    const url = `${this.baseUrl}assignments/${assignmentId}/`;
    return this.http.delete<any>(url);
  }
  getAssignments(): Observable<any>{
    const url = `${this.baseUrl}assignments/`;
    return this.http.get<any[]>(url);
    
  }
}

