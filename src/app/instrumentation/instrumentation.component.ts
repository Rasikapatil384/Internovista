import { Component,OnInit } from '@angular/core';
import { ColDef, ICellRendererParams } from 'ag-grid-community';  // Import necessary types
import { InstruService } from '../services/instru.service';

@Component({
  selector: 'app-instrumentation',
  templateUrl: './instrumentation.component.html',
  styleUrl: './instrumentation.component.css'
})
export class InstrumentationComponent implements OnInit {

  columnDefs: ColDef[] = [];  // Column definitions for AG Grid
  rowData: any[] = [];        // Data to be displayed in AG Grid

  isBrowser: boolean = false; // Check if we're in the browser

  constructor(private instruservice: InstruService) {} // Inject the service

  ngOnInit() {
    this.isBrowser = typeof window !== 'undefined';

    if (this.isBrowser) {
      // Initialize AG Grid columns
      this.columnDefs = [
        { headerName: 'Name', field: 'Name', width: 300 },
        { headerName: 'Company', field: 'Company', width: 200 },
        { headerName: 'Role', field: 'Role', width: 200 },
        { headerName: 'Stipend', field: 'Stipend', width: 150 },
        { headerName: 'Duration', field: 'Duration', width: 200 },
        { headerName: 'Location', field: 'Location', width: 200 },
        {
          headerName: 'LinkedIn',
          field: 'LinkedIn',
          width: 300,
          cellRenderer: (params: ICellRendererParams) => {
            return `<a href="${params.value}" target="_blank" rel="noopener noreferrer">${params.value}</a>`;
          }
        }
      ];

      // Fetch data from the backend API using the service
      this.instruservice.getData().subscribe(
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
    }
  }
}
