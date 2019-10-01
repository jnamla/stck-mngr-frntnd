import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

import { MatCardModule } from '@angular/material/card';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatDatepickerModule,
    MatInputModule,
    MatMomentDateModule,
    MatDialogModule,
    MatRadioModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,

    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,

    MatCardModule,

    MatDatepickerModule,
    MatInputModule,
    MatMomentDateModule,

    MatFormFieldModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatRadioModule
  ]
})

export class AppMaterialModule { }
