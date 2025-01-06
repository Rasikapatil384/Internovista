  import { Component, OnInit } from '@angular/core';
  import { ChartData, ChartOptions } from 'chart.js';
  import DataLabelsPlugin from 'chartjs-plugin-datalabels'; // Import the plugin
  import { PieService } from '../services/pie.service'; // Import the service
  
  
@Component({
  selector: 'app-entcpie',
  templateUrl: './entcpie.component.html',
  styleUrl: './entcpie.component.css'
})

  export class EntcpieComponent implements OnInit {
    pieChartData: ChartData<'pie', number[], string | string[]> = {
      labels: ['Core', 'FinTech', 'Others', 'Tech'], // Labels for pie chart sections
      datasets: [
        {
          data: [], // Data will be updated dynamically
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Corresponding colors
        }
      ]
    };
  
    pieChartOptions: ChartOptions<'pie'> = {
      plugins: {
        legend: {
          display: true,
          position: 'left',
          labels: {
            boxWidth: 20,
            padding: 20,
            usePointStyle: true,
          },
        },
        datalabels: {
          formatter: (value, context) => {
            const data = context?.chart?.data?.datasets?.[0]?.data;
            const validData = (data as (number | null | [number, number])[]).filter(
              (d): d is number => typeof d === 'number'
            );
            const total = validData.length > 0 ? validData.reduce((a, b) => a + b, 0) : 0;
            return total ? ((value / total) * 100).toFixed(2) + '%' : '0%';
          },
          color: '#fff',
          font: {
            weight: 'bold',
            size: 14,
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 50, // Ensure enough space on the left for the legend
          right: 20,
        }
      }
    };
  
    plugins = [DataLabelsPlugin]; // Enable DataLabelsPlugin
  
    constructor(private pieService: PieService) {} // Inject PieService
  
    ngOnInit(): void {
      this.fetchCompDepartmentData();
    }
  
    fetchCompDepartmentData() {
      // Use PieService to fetch the data
      this.pieService.getData().subscribe(
        (data: any) => {
          if (data && data.CompDepartment) {
            // Extract CompDepartment data
            const compData = [
              data.EntcDepartment['Core'] || 0,
              data.EntcDepartment['FinTech'] || 0,
              data.EntcDepartment['Others'] || 0,
              data.EntcDepartment['Tech'] || 0
            ];
  
            // Update the chart data
            this.pieChartData.datasets[0].data = compData;
          }
        },
        error => {
          console.error('Error fetching Computer Department data:', error);
        }
      );
    }
  }
  