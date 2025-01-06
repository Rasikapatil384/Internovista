import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Adjust the path as needed

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private elRef: ElementRef, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // Check initial login status
    this.isLoggedIn = this.authService.isLoggedIn();

    // Subscribe to authentication status changes
    this.authService.authStatusChanged.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  ngAfterViewInit(): void {
    // Add event listener for toggle button
    const toggleBtn = this.elRef.nativeElement.querySelector("#toggle-btn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const sidebar = this.elRef.nativeElement.querySelector("#sidebar");
        if (sidebar) {
          sidebar.classList.toggle("expand");
        }
      });
    }
  }

  reloadPage(): void {
    // Reloads the current route
    this.router.navigate([this.router.url]);
  }

  logout(): void {
    // Call logout method from AuthService and redirect to login
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect after logout
  }
}
