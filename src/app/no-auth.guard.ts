import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';  // Import AuthService
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // Check if the user is logged in
    if (this.authService.isLoggedIn()) {
      // If logged in, redirect to the main page (or another route)
      this.router.navigate(['/login']);
      return false;  // Prevent access to the login/signup page
    }

    // If not logged in, allow access to login/signup
    return true;
  }
}
