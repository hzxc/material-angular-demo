import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogRoutingModule } from './dialog-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { SimpleComponent } from './simple/simple.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    DialogRoutingModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  entryComponents: [
    SimpleComponent
  ],
  declarations: [
    DialogComponent,
    SimpleComponent
  ]
})
export class DialogModule { }
