import { Component, OnInit } from '@angular/core';
import * as highcharts from 'highcharts';
@Component({
  selector: 'app-high-charts-demo',
  templateUrl: './high-charts-demo.component.html',
  styleUrls: ['./high-charts-demo.component.scss']
})
export class HighChartsDemoComponent implements OnInit {
  constructor() {
    this.options = {
      title: { text: 'angular2-highcharts example' },
      series: [{
        name: 's1',
        data: [2, 3, 5, 8, 13],
        allowPointSelect: true
      }, {
        name: 's2',
        data: [-2, -3, -5, -8, -13],
        allowPointSelect: true
      }]
    };
  }
  options: Object;
  chart: Object;
  saveChart(chart) {
    this.chart = chart;
  }
  // addPoint() {
  //   this.chart.series[0].addPoint(Math.random() * 10);
  //   this.chart.series[1].addPoint(Math.random() * -10);
  // }
  onPointSelect(point) {
    alert(`${point.y} is selected`);
  }
  onSeriesHide(series) {
    alert(`${series.name} is selected`);
  }

  ngOnInit() {
  }

}
