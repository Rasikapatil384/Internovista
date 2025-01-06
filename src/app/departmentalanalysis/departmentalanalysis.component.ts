import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { BarserviceService } from '../services/barservice.service';  // Import your data service

Chart.register(...registerables, ChartDataLabels);

@Component({
  selector: 'app-departmentalanalysis',
  templateUrl: './departmentalanalysis.component.html',
  styleUrls: ['./departmentalanalysis.component.css']
})
export class DepartmentalanalysisComponent implements OnInit {
  public config: ChartConfiguration<'bar', number[], string> = {
    type: 'bar',
    data: {
      labels: ['Departments'],
      datasets: [
        {
          label: 'Comp interns',
          data: [],
          backgroundColor: '#bd7ebe',
          stack: 'Comp',
          barThickness: 100,
        },
        {
          label: 'Comp Non-Interns',
          data: [],
          backgroundColor:  '#beb9db',
          stack: 'Comp',
          barThickness: 100,
        },
        {
          label: 'It interns',
          data: [],
          backgroundColor: '#48b5c4',
          stack: 'It',
          barThickness: 100,
        },
        {
          label: 'It Non-Interns',
          data: [],
          backgroundColor: '#8bd3c7',
          stack: 'It',
          barThickness: 100,
        },
        {
          label: 'Entc interns',
          data: [],
          backgroundColor: '#ffb55a',
          stack: 'Entc',
          barThickness: 100,
        },
        {
          label: 'Entc Non-Interns',
          data: [],
          backgroundColor: '#ebdc78',
          stack: 'Entc',
          barThickness: 100,
        },
        {
          label: 'Mech interns',
          data: [],
          backgroundColor: '#c86558',
          stack: 'Mech',
          barThickness: 100,
        },
        {
          label: 'Mech Non-Interns',
          data: [],
          backgroundColor: '#fd7f6f',
          stack: 'Mech',
          barThickness: 100,
        },
        {
          label: 'Instru interns',
          data: [],
          backgroundColor: '#5ad45a',
          stack: 'Instru',
          barThickness: 100,
        },
        {
          label: 'Instru Non-Interns',
          data: [],
          backgroundColor: '#a6d75b',
          stack: 'Instru',
          barThickness: 100,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false,
          },
          ticks: {
            font: {
              size: 14,
            },
          },
        },
        y: {
          beginAtZero: true,
          stacked: true,
          grid: {
            display: true,
          },
          ticks: {
            font: {
              size: 10,
            },
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            font: {
              size: 12,
            },
          },
        },
        datalabels: {
          display:false,
          color: 'black',
          anchor: 'center',
          align: 'center',
          font: {
            size: 12,
            weight: 'bold',
          },
          
        },
      },
    },
  };

  



chart: Chart | undefined;

  constructor(private barservice: BarserviceService) {}  // Inject your data service

  ngOnInit(): void {

    const chartElement = document.getElementById('helloChart') as HTMLCanvasElement;
    if (chartElement) {
      this.chart = new Chart(chartElement, this.config);
    } else {
      console.error('Canvas element not found!');
    }

    // Fetch data from the backend
    this.barservice.getData().subscribe(
      (data) => {
        // Assuming the data has the 'Comp' field representing the number of 'Interns'
        if (data) {
          const compCount = data.Comp || 0;  // Extract 'Comp' from the response data
          const itCount = data.it || 0;  // Extract 'Comp' from the response data
          const entcCount = data.entc || 0;  // Extract 'Comp' from the response data
          const mechCount = data.mech || 0;  // Extract 'Comp' from the response data
          const instruCount = data.instru || 0;  // Extract 'Comp' from the response data

          // Set the 'Interns' value dynamically
          this.config.data.datasets[0].data = [compCount];
          this.config.data.datasets[1].data = [180-compCount];

          this.config.data.datasets[2].data = [itCount];
          this.config.data.datasets[3].data = [60-itCount];

          this.config.data.datasets[4].data = [entcCount];
          this.config.data.datasets[5].data = [180-entcCount];

          this.config.data.datasets[6].data = [mechCount];
          this.config.data.datasets[7].data = [60-mechCount];

          this.config.data.datasets[8].data = [instruCount];
          this.config.data.datasets[9].data = [60-instruCount];
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
