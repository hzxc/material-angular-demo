import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsDemoComponent } from './rxjs-demo.component';
import { RxjsDemoRoutingModule } from './rxjs-demo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RxjsDemoRoutingModule
  ],
  declarations: [RxjsDemoComponent]
})
export class RxjsDemoModule { }
