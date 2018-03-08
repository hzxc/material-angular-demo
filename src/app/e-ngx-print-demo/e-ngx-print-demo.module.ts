import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ENgxPrintDemoComponent } from './e-ngx-print-demo.component';
import { ENgxPrintDemoRoutingModule } from './e-ngx-print-demo-routing.module';
import {ENgxPrintModule} from "e-ngx-print";

@NgModule({
  imports: [
    ENgxPrintModule,
    CommonModule,
    ENgxPrintDemoRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ENgxPrintDemoComponent]
})
export class ENgxPrintDemoModule {

}
