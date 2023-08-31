// announcement.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announcement } from './announcement.model';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  private apiUrl = 'http://127.0.0.1:8000/api/announcements/';


  constructor(private http: HttpClient) {}

  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.apiUrl);
  }

  createAnnouncement(announcement: Announcement): Observable<Announcement> {
    return this.http.post<Announcement>(this.apiUrl, announcement);
  }


  
}

