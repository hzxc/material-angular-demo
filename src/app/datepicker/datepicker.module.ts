import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import { DatepickerRoutingModule } from './datepicker-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    DatepickerRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [DatepickerComponent]
})
export class DatepickerModule {



}
