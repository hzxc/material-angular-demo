import { Component, OnInit } from '@angular/core';
import * as highcharts from 'highcharts';
@Component({
  selector: 'app-high-charts-demo',
  templateUrl: './high-charts-demo.component.html',
  styleUrls: ['./high-charts-demo.component.scss']
})
export class HighChartsDemoComponent implements OnInit {
  title = 'highcharts works!';
  constructor() {
    this.options = {
      title : { text : 'simple chart' },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2],
      }]
    };
  }
  options: Object;

  ngOnInit() {
  }

}
