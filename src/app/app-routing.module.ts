import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'autocomplete',
    loadChildren: './autocomplete/autocomplete.module#AutocompleteModule',
  },
  {
    path: 'rxjs',
    loadChildren: './rxjs-demo/rxjs-demo.module#RxjsDemoModule',
  },
  {
    path: 'checkBox',
    loadChildren: './check-box/check-box.module#CheckBoxModule',
  },
  {
    path: 'datepicker',
    loadChildren: './datepicker/datepicker.module#DatepickerModule',
  },
  {
    path: 'table',
    loadChildren: './table/table.module#TableModule',
  },
  {
    path: 'chips',
    loadChildren: './chips/chips.module#ChipsModule',
  },
  {
    path: 'dialog',
    loadChildren: './dialog/dialog.module#DialogModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
