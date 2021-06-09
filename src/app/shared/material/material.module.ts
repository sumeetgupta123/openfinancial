import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ClickOutsideModule  } from 'ng4-click-outside';
import { MdePopoverModule } from '@material-extended/mde';
// import {IvyCarouselModule} from 'angular-responsive-carousel';
// import { NgxOrgChartModule } from 'ngx-org-chart';
// import { NguCarouselConfig } from '@ngu/carousel';
import { EditorModule } from '@tinymce/tinymce-angular';


const importExport = [
  EditorModule,
  // NguCarouselConfig,
  MatMenuModule,
  MatToolbarModule,
  MdePopoverModule, 
  RouterModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatRadioModule,
  MatButtonToggleModule,
  CommonModule,
  MatSelectModule,
  MatTabsModule,
  MatInputModule,
  MatCheckboxModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatSliderModule,
  MatAutocompleteModule,
  MatChipsModule,
  ReactiveFormsModule,
  FormsModule,
  ClickOutsideModule,
  MatPaginatorModule
]
@NgModule({
  declarations: [],
  imports: [
    importExport
  ],
  exports: [
    importExport
  ]
})
export class MaterialModule { }
