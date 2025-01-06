import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://127.0.0.1:5010'; // Flask backend URL

  constructor(private http: HttpClient) {}

  submitData(data: any, endpoint: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, data);
  }
}
