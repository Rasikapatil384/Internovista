import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { PieService } from '../services/pie.service'; // Import the service
import { AuthService } from '../auth.service'; // Import the AuthService

Chart.register(...registerables);

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  public config: ChartConfiguration<'doughnut'> = {
    type: 'doughnut',
    data: {
      labels: ['Core', 'Others', 'FinTech', 'Tech'], // Labels for chart
      datasets: [
        {
          label: 'Company Type Distribution',
          data: [], // Will be dynamically updated
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'red',
            'orange'
          ],
          hoverOffset: 4,
        }
      ]
    },
    options: {
      cutout: '0%', // Defines the type of the chart
      responsive: true,
      plugins: {
        legend: {
          display: true // Enable legend display
        }
      }
    }
  };
  
  piechart: any;
  showChart = false; // Flag to control chart visibility

  constructor(private pieService: PieService, private authService: AuthService) {}

  ngOnInit(): void {
    // Subscribe to authentication status
    this.authService.authStatusChanged.subscribe((isAuthenticated) => {
      this.showChart = isAuthenticated;  // Show chart only when authenticated
      if (isAuthenticated) {
        this.fetchChartData();  // Fetch data and render the chart
      }
    });
  }

  // Fetch data for the pie chart
  fetchChartData() {
    this.pieService.getData().subscribe(
      (data: any) => {
        if (data && data.Overall) {
          // Extract values from the Overall object
          const updatedData = [
            data.Overall['Core'] || 0,
            data.Overall['Others'] || 0,
            data.Overall['FinTech'] || 0,
            data.Overall['Tech'] || 0
          ];

          // Update the chart dataset
          this.config.data.datasets[0].data = updatedData;

          // Render or update the chart
          if (this.piechart) {
            this.piechart.update(); // Update existing chart
          } else {
            this.piechart = new Chart('PieChart', this.config); // Create new chart
          }
        }
      },
      (error) => {
        console.error('Error fetching chart data:', error);
      }
    );
  }
}
