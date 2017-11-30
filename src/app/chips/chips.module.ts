import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from './chips.component';
import { ChipsRoutingModule } from './chips-routing.module';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    ChipsRoutingModule,
    MaterialModule
  ],
  declarations: [ChipsComponent]
})
export class ChipsModule { }
