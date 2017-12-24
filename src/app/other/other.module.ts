import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ot1Component } from './ot1/ot1.component';
import { OtherRoutingModule } from './other-routing.module';
import { TimeagoDemoComponent } from './timeago-demo/timeago-demo.component';
import { OtherComponent } from './other.component';
import { MaterialModule } from '../shared/material/material.module';
import { JqPluginDirective } from './timeago-demo/jq-plugin.directive';

@NgModule({
  imports: [
    CommonModule,
    OtherRoutingModule,
    MaterialModule,
  ],
  declarations: [
    Ot1Component,
    TimeagoDemoComponent,
    OtherComponent,
    JqPluginDirective]
})
export class OtherModule { }
