import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartDemoComponent } from './ng-chart-demo.component';
import { ChartModule } from 'angular-highcharts';
import { NgChartDemoRoutingModule } from './ng-chart-demo-routing.module';
@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    NgChartDemoRoutingModule
  ],
  declarations: [NgChartDemoComponent]
})
export class NgChartDemoModule { }
