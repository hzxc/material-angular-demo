import { NgModule, SkipSelf, Optional } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatSelectModule,
  MatFormFieldModule,
  MatIconRegistry,
  MatDatepickerModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatProgressBarModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class MaterialModule {
  constructor() {
  }
}
