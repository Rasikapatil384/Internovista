import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // Import the AuthService

@Component({
  selector: 'app-smallbuttons',
  templateUrl: './smallbuttons.component.html',
  styleUrls: ['./smallbuttons.component.css']
})
export class SmallbuttonsComponent implements OnInit {
  showSmallButtons = false;  // Initially hide the small buttons

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Subscribe to authStatusChanged observable to listen for login state changes
    this.authService.authStatusChanged.subscribe((isAuthenticated) => {
      this.showSmallButtons = isAuthenticated;  // Show small buttons if authenticated
    });
  }
}
