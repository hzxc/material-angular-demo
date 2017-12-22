import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseMenuComponent } from './base-menu/base-menu.component';

const routes: Routes = [
  { path: '', component: BaseMenuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
