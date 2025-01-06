import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { BarserviceService } from '../services/barservice.service';  // Import your data service
import { AuthService } from '../auth.service';  // Import the AuthService

Chart.register(...registerables);

@Component({
  selector: 'app-stackedbarchart',
  templateUrl: './stackedbarchart.component.html',
  styleUrls: ['./stackedbarchart.component.css']
})
export class StackedbarchartComponent implements OnInit {
  public config: ChartConfiguration<'bar', number[], string> = {
    type: 'bar',
    data: {
      labels: ['Total Internships Secured'],  // You can update this dynamically if needed
      datasets: [
        {
          label: 'Interns',
          data: [],  // Will be populated dynamically
          backgroundColor: 'green',
          barThickness: 50,
        },
        {
          label: 'Not Interns',
          data: [],  // Can be dynamically updated
          backgroundColor: 'red',
          barThickness: 50,
        },
      ],
    },
    options: {
      indexAxis: 'y',
      aspectRatio: 15,
      scales: {
        x: {
          beginAtZero: true,
          stacked: true,
          display: false,  // Make sure the scale is visible
        },
        y: {
          stacked: true,
          display: false,  // Make sure the scale is visible
        },
      },
      plugins: {
        legend: {
          display: true,
          align: 'start',
        },
        datalabels: {
          display: false
        }
      },
    },
  };

  chart: Chart | undefined;
  showChart = false;  // Flag to control chart visibility

  constructor(private barservice: BarserviceService, private authService: AuthService) {}

  ngOnInit(): void {
    // Subscribe to authentication status changes
    this.authService.authStatusChanged.subscribe((isAuthenticated) => {
      this.showChart = isAuthenticated;  // Show chart only if authenticated
      if (isAuthenticated) {
        this.fetchDataAndRenderChart();
      }
    });
  }

  // Fetch data and render chart
  private fetchDataAndRenderChart(): void {
    this.barservice.getData().subscribe(
      (data) => {
        // Assuming the data has the 'total' field representing the number of 'Interns'
        if (data) {
          const Count = data.total || 0;  // Extract 'total' from the response data

          // Set the 'Interns' value dynamically
          this.config.data.datasets[0].data = [Count];
          this.config.data.datasets[1].data = [663 - Count];

          // Reinitialize the chart with updated data if it's not already initialized
          if (this.chart) {
            // Update chart data and re-render it
            this.chart.update();
          } else {
            // Initialize the chart if it's not initialized yet
            this.chart = new Chart('MyChart', this.config);
          }
        }
      },
      (error) => {
        console.error('Error fetching data:', error);  // Handle error if needed
      }
    );
  }
}
