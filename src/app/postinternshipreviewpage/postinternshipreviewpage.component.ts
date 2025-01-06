import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-postinternshipreviewpage',
  templateUrl: './postinternshipreviewpage.component.html',
  styleUrls: ['./postinternshipreviewpage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Optimize change detection
})
export class PostinternshipreviewpageComponent {

  // Form data model for post-internship review
  formData: any = {
    companyName: '',
    internshipRole: '',
    internshipWork: '',
    internshipExperience: '',
    internshipLocation: '',
    modeOfInternship: '',
    isPpoSecured: false,
    fullTimeRole: '',
    ctcOffered: 0,
    jobLocation: '',
    Name:'',
    Department:''
  };

  // Flag to manage button state
  isClicked: boolean = false;

  // State for PPO visibility
  isPpoSecured: boolean = false;

  // Department selection
  selectedDepartment: string = '';

  // Method to get the button class based on the state
  getButtonClass() {
    return this.isClicked ? 'clicked-button' : 'unclicked-button'; // Return the appropriate class
  }

  // Method to toggle button clicked state
  toggleButtonClick() {
    this.isClicked = !this.isClicked; // Toggle the clicked state
  }

  // Constructor to inject the FormService
  constructor(private postService: PostService) {}

  // Method to submit the post-internship review
  submitPostInternshipReview(): void {
    console.log('Form Data before submitting:', this.formData); // Log form data before submission

    this.postService.submitData(this.formData, 'post-internship-review').subscribe(
      response => {
        console.log('Post-Internship Review submitted:', response);
      },
      error => {
        console.error('Error submitting form:', error);
      }
    );
  }
}
