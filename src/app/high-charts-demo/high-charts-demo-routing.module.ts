import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighChartsDemoComponent } from './high-charts-demo.component';

const routes: Routes = [
  { path: '', component: HighChartsDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HighChartsDemoRoutingModule { }
