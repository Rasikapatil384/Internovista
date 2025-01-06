import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignUp(): void {
    if (!this.name || !this.email || !this.password) {
      alert('Please fill in all fields.');
      return;
    }

    this.authService.signUp(this.name, this.email, this.password).subscribe(
      (response) => {
        alert('Registration successful! Please log in.');
        this.router.navigate(['/login']); // Navigate to login
      },
      (error) => {
        console.error('Sign-up failed', error);
        alert('An error occurred during registration. Please try again.');
      }
    );
  }
}
