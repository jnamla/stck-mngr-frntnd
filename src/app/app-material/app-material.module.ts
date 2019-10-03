import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,

    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatDatepickerModule,
    MatInputModule,
    MatMomentDateModule,
    MatCheckboxModule,
    MatPaginatorModule
    
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    
    MatTableModule,
    MatSortModule,

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
    MatRadioModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatPaginatorModule
  ]
})

export class AppMaterialModule { }
