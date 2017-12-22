import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMenuComponent } from './base-menu/base-menu.component';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    MenuRoutingModule
  ],
  declarations: [BaseMenuComponent]
})
export class MenuModule { }
