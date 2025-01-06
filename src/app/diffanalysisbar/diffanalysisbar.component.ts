import { Component, OnInit } from '@angular/core';
import { PieService } from '../services/pie.service';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Registering the necessary components for Chart.js
Chart.register(...registerables);

@Component({
  selector: 'app-diffanalysisbar',
  templateUrl: './diffanalysisbar.component.html',
  styleUrls: ['./diffanalysisbar.component.css']
})
export class DiffanalysisbarComponent implements OnInit {
  // Chart configuration for a stacked bar chart
  public config: ChartConfiguration<'bar', number[], string> = {
    type: 'bar',
    data: {
      labels: ['Fintech', 'Tech', 'Core', 'Others'], // Static labels for categories
      datasets: [
        {
          data: [0, 0, 0, 0], // Initially set to 0, will be updated with real data
          backgroundColor: 'blue',
          barThickness: 30,    // Adjusted bar thickness for a cleaner look
        },
      ],
    },
    options: {
      indexAxis: 'y',  // Horizontal stacked bar
      aspectRatio: 7,  // Adjusted for a better layout
      scales: {
        x: {
          beginAtZero: true,
          stacked: true,
          grid: {
            display: false,  // Hide gridlines on the x-axis for simplicity
          },
          display: true,  // Display x-axis if needed
          ticks: {
            font: {
              size: 11,  // Set y-axis label font size to 20
            }
          },
        },
        y: {
          stacked: false,
          grid: {
            display: false,  // Hide gridlines on the x-axis for simplicity
          },
          display: true,  // Display y-axis with categories
          ticks: {
            font: {
              size: 15,  // Set y-axis label font size to 20
            }
          },
        },
      },
      plugins: {
        legend: {
          display: false,
          labels: {
            font: {
              size: 10,
              weight: 'bold',
            },
            boxWidth: 20,
          }
        },
        datalabels: {
          display: false,
          color: 'black',  // Black labels inside the bars for better contrast
          anchor: 'center',
          align: 'center',
          font: {
            size: 20,
            weight: 'bold',
          },
        },
      }
    },
  };

  chart: Chart | undefined;
  dataFromService: any;

  constructor(private pieService: PieService) {}  // Use PieService instead of BarserviceService

  // Fetch the data when the component initializes
  ngOnInit(): void {
    // Call the service method to get the data
    this.pieService.getData().subscribe((data: any) => {
      // Assuming the data is in the structure you provided
      this.dataFromService = data.DiffAnalysis;

      // Update the chart data with the values from the service
      this.updateChartData();
      
      // Initialize the chart once the data is available
      const chartElement = document.getElementById('helloChart') as HTMLCanvasElement;
      if (chartElement) {
        this.chart = new Chart(chartElement, this.config);
      } else {
        console.error('Canvas element not found!');
      }
    });
  }

  // Method to update the chart with data from the service
  updateChartData(): void {
    // Set the data in the chart configuration
    this.config.data.datasets[0].data = [
      this.dataFromService.FinTech,
      this.dataFromService.Tech,
      this.dataFromService.Core,
      this.dataFromService.Others,
    ];

    // If the chart is already created, update it
    if (this.chart) {
      this.chart.update();
    }
  }
}
