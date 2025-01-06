import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5013';
  public isAuthenticated = new BehaviorSubject<boolean>(false); // Auth state
  authStatusChanged = this.isAuthenticated.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    if (this.isBrowserEnvironment()) {
      this.isAuthenticated.next(this.getToken() !== null);
    }
  }

  private isBrowserEnvironment(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true
    }).pipe(
      catchError((error) => {
        console.error('Login error', error);
        return throwError(() => new Error('Login failed'));
      })
    );
  }



  signUp(name: string, email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const payload = { name, email, password };
  
    return this.http.post<any>(`${this.apiUrl}/signup`, payload, { headers }).pipe(
      catchError((error) => {
        console.error('Sign-up error:', error);
        return throwError(() => new Error(error?.error?.message || 'Sign-up failed'));
      })
    );
  }
  

  storeToken(token: string): void {
    if (this.isBrowserEnvironment()) {
      localStorage.setItem('authToken', token);
    }
    this.isAuthenticated.next(true); // Update auth state
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isLoggedIn(): boolean {
    const loggedIn = this.getToken() !== null;
    this.isAuthenticated.next(loggedIn);
    return loggedIn;
  }

  logout(): void {
    if (this.isBrowserEnvironment()) {
      localStorage.removeItem('authToken');
    }
    this.isAuthenticated.next(false); // Update auth state
    this.router.navigate(['/login']);
  }
}
