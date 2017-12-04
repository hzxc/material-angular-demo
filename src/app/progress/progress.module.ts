import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';
import { MaterialModule } from '../shared/material/material.module';
import { ProgressRoutingModule } from './progress-routing.module';
import { ConfigurableProgressSpinnerComponent } from './configurable-progress-spinner/configurable-progress-spinner.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProgressRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [ProgressComponent, ConfigurableProgressSpinnerComponent]
})
export class ProgressModule { }
