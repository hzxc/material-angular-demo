import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { RetrievingDataThroughHttpComponent } from './retrieving-data-through-http/retrieving-data-through-http.component';
import { SortingPaginationFilteringComponent } from './sorting-pagination-filtering/sorting-pagination-filtering.component';
import { TableRoutingModule } from './table-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TableRoutingModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    TableComponent,
    RetrievingDataThroughHttpComponent,
    SortingPaginationFilteringComponent
  ]
})
export class TableModule { }
