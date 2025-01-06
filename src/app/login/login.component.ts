import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isPasswordVisible: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  // Toggle password visibility
  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  // Handle login submission
  onLogin(): void {
    console.log('Attempting login with:', this.email, this.password);

    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login successful:', response);

        // Store token after successful login
        this.authService.storeToken(response.token);

        // Emit authentication state change
        this.authService.isAuthenticated.next(true);

        // Navigate to main and force a reload of the component
        this.router.navigateByUrl('/main').then(() => {
          window.location.reload(); // Force page reload
        });
      },
      (error) => {
        console.error('Login failed:', error);
        if (error.status === 400) {
          alert('Invalid email or password. Please try again.');
        } else {
          alert('An unexpected error occurred. Please try again later.');
        }
      }
    );
  }
}
