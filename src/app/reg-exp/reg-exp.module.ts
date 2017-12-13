import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegExpComponent } from './reg-exp.component';
import { RegExpRoutingModule } from './reg-exp-routing.module';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    RegExpRoutingModule,
    MaterialModule
  ],
  declarations: [RegExpComponent]
})
export class RegExpModule { }
