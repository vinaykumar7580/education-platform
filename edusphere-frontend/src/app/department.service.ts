// department.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private apiUrl = 'http://localhost:8000/api/departments/'; // Adjust the URL

  constructor(private http: HttpClient) {}

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }

  createDepartment(department: Department): Observable<Department> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Department>(this.apiUrl, department, { headers });
  }
}

interface Department {
  id: number;
  name: string;
}

export { Department };
