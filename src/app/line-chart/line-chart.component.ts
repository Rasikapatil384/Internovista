import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth.service'; // Import the AuthService
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, AfterViewInit {
  public config: ChartConfiguration<'line'> = {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    },
    options: {
      responsive: true,  // Ensure the chart resizes based on the canvas/container
      plugins: {
        legend: {
          display: false,
          position: 'top'
        }
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Month'
          },
        },
        y: {
          display: true,
          beginAtZero: true,
          title: {
            display: true,
            text: 'Value'
          }
        }
      }
    }
  };

  // Declare the chart variable
  lineChart: any;

  // Flag to control visibility
  showChart = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Subscribe to the authStatusChanged observable to listen for login state changes
    this.authService.authStatusChanged.subscribe((isAuthenticated) => {
      this.showChart = isAuthenticated;  // Show chart if authenticated
    });
  }

  ngAfterViewInit(): void {
    // Ensure the chart is initialized after the view is rendered (when showChart is true)
    if (this.showChart && !this.lineChart) {
      this.lineChart = new Chart('LineChart', this.config); // Initialize chart after login
    }
  }
}
