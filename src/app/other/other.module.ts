import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ot1Component } from './ot1/ot1.component';
import { OtherRoutingModule } from './other-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OtherRoutingModule
  ],
  declarations: [Ot1Component]
})
export class OtherModule { }
