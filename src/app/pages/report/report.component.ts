import { Component } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'ngx-report',
  styleUrls: ['./report.component.scss'],
  templateUrl: './report.component.html',
})

export class ReportComponent {
  title = 'dashboard';
  chart = [];

  ngOnInit() {
    this.chart = new Chart('doughnut', {
      type: 'doughnut',
      options: {
        rersponsive: true,
        legend: {
          display: false
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      },
      data: {
        datasets: [{
          data: [60, 20, 10, 5],
          backgroundColor: ['rgb(102, 204, 0)', 'rgb(212, 214, 0)', 'rgb(255, 153, 0)', 'rgb(255, 0, 0)'],
          label: 'Dataset 1'
        }],
        labels: ['Information', 'Low', 'Medium', 'High',]
      }
    })
  }

}
