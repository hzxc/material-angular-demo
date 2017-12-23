import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ot1Component } from './ot1/ot1.component';

const routes: Routes = [
  { path: '', component: Ot1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
