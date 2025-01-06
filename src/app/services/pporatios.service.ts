import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PPOratiosService {

  private apiUrl = 'http://localhost:5012/api/pporatio'; // Flask API endpoint

  constructor(private http: HttpClient) {}


  getPPORatios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
