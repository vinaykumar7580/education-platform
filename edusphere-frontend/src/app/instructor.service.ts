import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private baseUrl='http://127.0.0.1:8000/api/instructors/'

  constructor(private http: HttpClient) { }

  //for all instructor
  getInstructors(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  //for single instructor
  getInstructor(id: number): Observable<any> {
    const url = `${this.baseUrl}${id}/`;
    return this.http.get<any>(url);
  }

  createInstructor(instructorData: any): Observable<any>{
    return this.http.post<any>(this.baseUrl, instructorData)
  }

  updateInstructor(id:number, instructorData:any):Observable<any>{
    const url= `${this.baseUrl}${id}/`;
    return this.http.put<any>(url, instructorData);
  }

  deleteInstructor(id: number): Observable<any> {
    const url = `${this.baseUrl}${id}/`;
    return this.http.delete<any>(url);
  }

  
}
