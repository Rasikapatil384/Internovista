import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { PPOratiosService } from '../services/pporatios.service';

@Component({
  selector: 'app-difficulty-analysis',
  templateUrl: './difficulty-analysis.component.html',
  styleUrls: ['./difficulty-analysis.component.css']
})
export class DifficultyAnalysisComponent implements OnInit {
  columnDefs: ColDef[] = [];
  rowData: any[] = [];
  isBrowser: boolean = false;

  constructor(private ppoRatiosService: PPOratiosService) {}

  ngOnInit() {
    this.isBrowser = typeof window !== 'undefined';

    if (this.isBrowser) {
      this.columnDefs = [
        { headerName: 'Company', field: 'Company', width: 350 },
        {headerName:'Sector',field: 'CompanyType', width: 290},
        { headerName: 'Interview Level', field: 'Interview_level', width: 350 },
        { headerName: 'PPO Conversion Ratio (%)', field: 'PPO_conversion', width: 350 }
      ];

      this.ppoRatiosService.getPPORatios().subscribe(
        (data: any[]) => {
          console.log('Data fetched:', data);
          this.rowData = data.map(item => ({
            Company: item.Company,
            CompanyType:item.CompanyType,
            Interview_level: this.getInterviewLevel(item.PPO_Ratio),
            PPO_conversion: parseFloat(item.PPO_Ratio).toFixed(2) // Ensure percentage formatting
          }));
        },
        error => {
          console.error('Error fetching PPO ratios:', error); // Detailed logging
        }
      );
    }
  }

  getInterviewLevel(ratio: number): string {
    if (ratio > 75) return 'Easy';
    if (ratio > 50) return 'Medium';
    return 'Hard';
  }
}
