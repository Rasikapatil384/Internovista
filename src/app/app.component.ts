import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMainContent = true;
  title='Internovista';
  constructor(private router: Router) {
    // Subscribe to router events to detect route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Hide the main dashboard content if the current route matches any of the specified routes
        this.showMainContent = !['/account', '/bigbuttonpage', '/reviewtype', '/preinternshipreviewpage','/reviewtype/preinternshipreviewpage','/reviewtype/postinternshipreviewpage','/grid','/difficulty-analysis','/departmentalanalysis','/student-search','/company-search','/computer','/it','/entc','/instrumentation','/mechanical','/companydetails'].includes(event.url);
      }
    });
  }
}
