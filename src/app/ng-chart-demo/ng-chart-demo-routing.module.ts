import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgChartDemoComponent } from './ng-chart-demo.component';

const routes: Routes = [
  { path: '', component: NgChartDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NgChartDemoRoutingModule { }
