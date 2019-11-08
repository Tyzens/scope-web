import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'ngx-ecommerce',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss'],
})
export class ECommerceComponent implements OnInit {
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
