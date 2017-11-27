import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsDemoComponent } from './rxjs-demo.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsDemoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsDemoRoutingModule { }
