import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  createSubmission(submission: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/submissions/`, submission);
  }
  getSubmissions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/submissions/`);
  }
}
