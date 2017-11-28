import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import { DatepickerRoutingModule } from './datepicker-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DatepickerRoutingModule,
    MaterialModule
  ],
  declarations: [DatepickerComponent]
})
export class DatepickerModule { }
