import { TableComponent } from './table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  RetrievingDataThroughHttpComponent
} from './retrieving-data-through-http/retrieving-data-through-http.component';
import {
  SortingPaginationFilteringComponent
} from './sorting-pagination-filtering/sorting-pagination-filtering.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
    children: [
      { path: 'fromHttp', component: RetrievingDataThroughHttpComponent },
      { path: 'spf', component: SortingPaginationFilteringComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TableRoutingModule { }
