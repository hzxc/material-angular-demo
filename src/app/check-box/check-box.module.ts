import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxComponent } from './check-box.component';
import { CheckBoxRoutingModule } from './check-box-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CheckBoxRoutingModule,
    MaterialModule
  ],
  declarations: [CheckBoxComponent]
})
export class CheckBoxModule { }
