import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-reviewtype',
  templateUrl: './reviewtype.component.html',
  styleUrls: ['./reviewtype.component.css']
})
export class ReviewtypeComponent {
  name: string = '';
  department: string = '';
  reviewType: string = '';

  constructor(private router: Router, private formService: FormService) {}

  navigateToPreInternship() {
    this.router.navigate(['/preinternshipreviewpage']);
  }
  navigateToPostInternship() {
    this.router.navigate(['/postinternshipreviewpage']);
  }


  navigateTo(route: string): void {
    this.router.navigate([route], { relativeTo: this.router.routerState.root.firstChild }); // Ensure it's relative to the current route
  }
  submitReviewType(): void {
    const data = { name: this.name, department: this.department, reviewType: this.reviewType };
    this.formService.submitData(data, 'review-type').subscribe(response => {
      console.log('Data submitted successfully:', response);
    });
  }
}
