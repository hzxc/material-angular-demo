import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ot1Component } from './ot1/ot1.component';
import { TimeagoDemoComponent } from './timeago-demo/timeago-demo.component';
import { OtherComponent } from './other.component';

const routes: Routes = [
  { path: '', component: OtherComponent },
  { path: 'ot1', component: Ot1Component },
  { path: 'timeago', component: TimeagoDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
