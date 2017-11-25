import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteRoutingModule } from './autocomplete-routing.module';
import { SimpleComponent } from './simple/simple.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AutocompleteRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SimpleComponent]
})
export class AutocompleteModule { }
