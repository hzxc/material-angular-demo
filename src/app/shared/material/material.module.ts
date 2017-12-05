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
  MatProgressSpinnerModule,
  MatChipsModule,
<<<<<<< HEAD
  MatTabsModule,
=======
  MatSliderModule,
>>>>>>> 79768e2e0cb4bb10c79af426d2e31f72c392bf8a
} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
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
    MatProgressSpinnerModule,
    MatChipsModule,
<<<<<<< HEAD
    MatTabsModule
=======
    MatRadioModule,
    MatSliderModule
>>>>>>> 79768e2e0cb4bb10c79af426d2e31f72c392bf8a
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
    MatProgressSpinnerModule,
    MatChipsModule,
<<<<<<< HEAD
    MatTabsModule
=======
    MatRadioModule,
    MatSliderModule
>>>>>>> 79768e2e0cb4bb10c79af426d2e31f72c392bf8a
  ],
  declarations: []
})
export class MaterialModule {
  constructor() {
  }
}
