// src/app/account/account.component.ts
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  SignupName = "Priyanka Patil";
  Emailid = "priyanka.patil@cumminscollege.in";
  Branch = "E&TC";
  yearofstudy = "Final Year";

  defaultImageUrl = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png';
  previewUrl: string | ArrayBuffer | null = this.defaultImageUrl;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }
}
