import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { BarserviceService } from '../services/barservice.service';  // Import your data service

Chart.register(...registerables);

@Component({
  selector: 'app-enct-bar',
  templateUrl: './enct-bar.component.html',
  styleUrl: './enct-bar.component.css'
})

export class EnctBarComponent implements OnInit {
  public config: ChartConfiguration<'bar', number[], string> = {
    type: 'bar',
    data: {
      labels: ['Total Internships Secured'],  // You can update this dynamically if needed
      datasets: [
        {
          label: 'Interns',
          data: [],  // Will be populated dynamically
          backgroundColor: 'green',
          barThickness: 200,
        },
        {
          label: 'Not Interns',
          data: [],  // Can be dynamically updated
          backgroundColor: 'red',
          barThickness: 200,
        },
      ],
    },
    options: {
      indexAxis: 'y',
      aspectRatio: 10,
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

  constructor(private barservice: BarserviceService) {}  // Inject your data service

  ngOnInit(): void {
    // Fetch data from the backend
    this.barservice.getData().subscribe(
      (data) => {
        // Assuming the data has the 'Comp' field representing the number of 'Interns'
        if (data) {
          const Count = data.entc || 0;  // Extract 'Comp' from the response data

          // Set the 'Interns' value dynamically
          this.config.data.datasets[0].data = [Count];
          this.config.data.datasets[1].data = [180-Count];

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
