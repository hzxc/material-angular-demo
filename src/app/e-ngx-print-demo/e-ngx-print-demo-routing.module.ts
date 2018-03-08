import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ENgxPrintDemoComponent } from './e-ngx-print-demo.component';

const routes: Routes = [
  { path: '', component: ENgxPrintDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ENgxPrintDemoRoutingModule { }
