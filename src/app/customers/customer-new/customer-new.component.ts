import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {

  emailFormCtrl: FormControl;
  firstNameFormCtrl: FormControl;
  middleNameFormCtrl: FormControl;
  lastNameFormCtrl: FormControl;
  addressFormCtrl: FormControl;
  phoneFormCtrl: FormControl;
  faxFormCtrl: FormControl;

  constructor( private dialog: MatDialog, private snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.emailFormCtrl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.firstNameFormCtrl = new FormControl('', [
      Validators.required
    ]);
    this.middleNameFormCtrl = new FormControl('', []);
    this.lastNameFormCtrl = new FormControl('', [
      Validators.required
    ]);
    this.addressFormCtrl = new FormControl('', [
      Validators.required
    ]);
    this.phoneFormCtrl = new FormControl('', [
      Validators.required
    ]);
    this.faxFormCtrl = new FormControl('', [
      Validators.required
    ]);
  }

  openRepDialog(): void {
    const dialogRef = this.dialog.open( RepDialogComponent, {
      width: '250px',
      data: {}
    });
    
    dialogRef.afterClosed().subscribe( result => {
      alert(`User chose ${result}`);
    });
  }

  openUndoSnackBar(): void {
    const snackBarRef = this.snackBar.open( 
      'Customer saved',
      'UNDO',
      {
        horizontalPosition: 'end'
      }
    );
    
    snackBarRef.onAction().subscribe( () => {
      alert('Undoing that save...');
    });
  }

}
