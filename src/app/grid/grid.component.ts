import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { DataService } from '../services/data.service';  // Import the DataService

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  columnDefs: ColDef[] = [];
  rowData: any[] = [];
  isBrowser: boolean = false;
  
  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) {} // Inject DataService

  ngOnInit() {
    this.isBrowser = typeof window !== 'undefined';

    if (this.isBrowser) {
      this.columnDefs = [
        { headerName: 'Company Name', field: 'companyname', width: 350, cellRenderer: this.companyCellRenderer.bind(this), headerClass: 'header-center' },
        { headerName: 'No. of Students selected', field: 'studentsselected', width: 220, cellStyle: { 'text-align': 'center' }, headerClass: 'header-center' },
        { headerName: 'Stipend', field: 'stipend', width: 180, cellStyle: { 'text-align': 'center' }, headerClass: 'header-center' },
        { headerName: 'Duration', field: 'duration', width: 190, cellStyle: { 'text-align': 'center' }, headerClass: 'header-center' },
        { headerName: 'Eligible Branches', field: 'eligiblebranches', width: 251, cellStyle: { 'text-align': 'center' }, headerClass: 'header-center' },
        { headerName: 'Location', field: 'location', width: 150, cellStyle: { 'text-align': 'center' }, headerClass: 'header-center' }
      ];

      // Fetch data from the API
      this.dataService.getData().subscribe(
        data => {
          this.rowData = data;  // Set the rowData with data from the backend
        },
        error => {
          console.error("Error fetching data:", error); // Handle error if needed
        }
      );
    }
  }

  // Custom cell renderer to render the company name as a button
  companyCellRenderer(params: any) {
    const button = document.createElement('button');
    button.innerText = params.value;
    button.classList.add('company-button');
    button.addEventListener('click', () => {
      this.navigateTo('/companydetails', params.value);
    });
    return button;
  }

  // Function to handle navigation with route and company name
  navigateTo(route: string, companyName: string): void {
    this.router.navigate([route], { relativeTo: this.route, queryParams: { companyName } });
  }
}
