import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighChartsDemoComponent } from './high-charts-demo.component';
import { HighChartsDemoRoutingModule } from './high-charts-demo-routing.module';
import { ChartModule } from 'angular2-highcharts';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';
import * as highchartsHeatmap from 'highcharts/modules/heatmap';

export function highchartsFactory() {
  highchartsHeatmap(highcharts);
  return highcharts;
}

@NgModule({
  imports: [
    CommonModule,
    HighChartsDemoRoutingModule,
    ChartModule.forRoot(
      require('highcharts/highstock'),
      require('highcharts/modules/exporting')
  )
  ],
  providers: [
    // {
    //   provide:HighchartsStatic,
    //   useFactory: highchartsFactory
    // }
  ],
  declarations: [HighChartsDemoComponent]
})
export class HighChartsDemoModule { }
