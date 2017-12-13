import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegExpComponent } from './reg-exp.component';

const routes: Routes = [
  { path: '', component: RegExpComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RegExpRoutingModule { }
