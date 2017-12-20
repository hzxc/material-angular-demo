import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxComponent } from './check-box.component';
import { CheckBoxRoutingModule } from './check-box-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CheckBoxRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [CheckBoxComponent]
})
export class CheckBoxModule { }
