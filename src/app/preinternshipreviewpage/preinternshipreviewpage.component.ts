import { Component } from '@angular/core';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-preinternshipreviewpage',
  templateUrl: './preinternshipreviewpage.component.html',
  styleUrls: ['./preinternshipreviewpage.component.css']
})
export class PreinternshipreviewpageComponent {
  // Define form data structure
  formData: any = {
    companyName: '',
    testDetails: '',
    interviewRounds: 0,
    interviewExperience: '',
    questionTypes: '',
    interviewDifficulty: '',
    internshipDuration: 0,
    Name:'',
    Department:''
  };

  constructor(private formService: FormService) {}

  // Method to submit form data
  submitPreInternshipReview(): void {
    // console.log('Form Data before submitting:', this.formData); // Debugging
    this.formService.submitData(this.formData, 'pre-internship-review').subscribe(
      response => {
        console.log('Pre-Internship Review submitted:', response);
      },
      error => {
        console.error('Error submitting form:', error);
      }
    );
  }
}
