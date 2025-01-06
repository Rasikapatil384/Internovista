import { Component, OnInit } from '@angular/core';
import { ColDef, ICellRendererParams } from 'ag-grid-community';  // Import necessary types
import { StudentsearchService } from '../services/studentsearch.service';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrl: './student-search.component.css'
})

export class StudentSearchComponent implements OnInit {
  columnDefs: ColDef[] = [];
  rowData: any[] = [];

  isBrowser: boolean = false; // Check if we're in the browser
  quickFilterText: string='';

  constructor(private studentsearchservice: StudentsearchService){}
  ngOnInit() {
    this.isBrowser = typeof window !== 'undefined';

    if (this.isBrowser) {
      // Initialize AG Grid only if we are on the client (browser)
      this.columnDefs = [
        { headerName: 'Name', field: 'Name', width: 300 },
        { headerName: 'Department', field: 'Department', width: 200 },
        { headerName: 'Company', field: 'Company', width: 200 },
        { headerName: 'Role', field: 'Role', width: 200 },
        { headerName: 'Stipend', field: 'Stipend', width: 150 },
        { headerName: 'Duration', field: 'Duration', width: 150 },
        { headerName: 'Location', field: 'Location', width: 150 },
        {
          headerName: 'LinkedIn', 
          field: 'LinkedIn', 
          width: 300,
          cellRenderer: (params: ICellRendererParams) => {
            // Create an anchor tag for the LinkedIn link and return it as a string
            return `<a href="${params.value}" target="_blank" rel="noopener noreferrer">${params.value}</a>`;
          },
          
          filter:true
        }
      ];

      // Fetch data from the backend API using the service
      this.studentsearchservice.getData().subscribe(
        (data) => {
          console.log('Fetched data:', data);  // Log the data to check its structure
          if (data && data.length > 0) {
            this.rowData = data;  // Set the fetched data to rowData
          } else {
            console.log('No data available');
          }
        },
        (error) => {
          console.error('Error fetching data:', error);  // Handle any errors
        }
      );
    

      // this.rowData = [
      //   { name: 'Gauri Nafade', company: 'Barclays', role: 'Technology Intern', stipend: '75000', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/gauri-nafade-423746238' },
      //   { name: 'Prachi Patil', company: 'Siemens', role: 'SDE', stipend: 'NIL', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/prachi-patil-a5354a22b' },
      //   { name: 'Rasika Patil', company: 'Barclays', role: 'Technology Intern', stipend: '75000', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/rasika-patil-09b11622b' },
      //   { name: 'Gauri Nafade', company: 'Barclays', role: 'Technology Intern', stipend: '75000', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/gauri-nafade-423746238' },
      //   { name: 'Prachi Patil', company: 'Siemens', role: 'SDE', stipend: 'NIL', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/prachi-patil-a5354a22b' },
      //   { name: 'Rasika Patil', company: 'Barclays', role: 'Technology Intern', stipend: '75000', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/rasika-patil-09b11622b' },
      //   { name: 'Gauri Nafade', company: 'Barclays', role: 'Technology Intern', stipend: '75000', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/gauri-nafade-423746238' },
      //   { name: 'Prachi Patil', company: 'Siemens', role: 'SDE', stipend: 'NIL', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/prachi-patil-a5354a22b' },
      //   { name: 'Rasika Patil', company: 'Barclays', role: 'Technology Intern', stipend: '75000', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/rasika-patil-09b11622b' },
      //   { name: 'Gauri Nafade', company: 'Barclays', role: 'Technology Intern', stipend: '75000', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/gauri-nafade-423746238' },
      //   { name: 'Prachi Patil', company: 'Siemens', role: 'SDE', stipend: 'NIL', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/prachi-patil-a5354a22b' },
      //   { name: 'Rasika Patil', company: 'Barclays', role: 'Technology Intern', stipend: '75000', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/rasika-patil-09b11622b' },
      //   { name: 'Gauri Nafade', company: 'Barclays', role: 'Technology Intern', stipend: '75000', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/gauri-nafade-423746238' },
      //   { name: 'Prachi Patil', company: 'Siemens', role: 'SDE', stipend: 'NIL', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/prachi-patil-a5354a22b' },
      //   { name: 'Rasika Patil', company: 'Barclays', role: 'Technology Intern', stipend: '75000', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/rasika-patil-09b11622b' },
      //   { name: 'Gauri Nafade', company: 'Barclays', role: 'Technology Intern', stipend: '75000', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/gauri-nafade-423746238' },
      //   { name: 'Prachi Patil', company: 'Siemens', role: 'SDE', stipend: 'NIL', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/prachi-patil-a5354a22b' },
      //   { name: 'Rasika Patil', company: 'Barclays', role: 'Technology Intern', stipend: '75000', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/rasika-patil-09b11622b' },
      //   { name: 'Gauri Nafade', company: 'Barclays', role: 'Technology Intern', stipend: '75000', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/gauri-nafade-423746238' },
      //   { name: 'Prachi Patil', company: 'Siemens', role: 'SDE', stipend: 'NIL', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/prachi-patil-a5354a22b' },
      //   { name: 'Rasika Patil', company: 'Barclays', role: 'Technology Intern', stipend: '75000', duration: '2 Months', location: 'Pune', linkedin: 'https://www.linkedin.com/in/rasika-patil-09b11622b' },
      // ];
    }
  }
  onSearchChange(event: any): void {
    this.quickFilterText = event.target.value;  // Update the quickFilterText with the input value
  }



}