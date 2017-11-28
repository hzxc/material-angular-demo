import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsDemoComponent } from './rxjs-demo.component';
import { RxjsDemoRoutingModule } from './rxjs-demo-routing.module';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    RxjsDemoRoutingModule,
    MaterialModule
  ],
  declarations: [RxjsDemoComponent]
})
export class RxjsDemoModule { }
