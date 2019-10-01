import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';

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

  constructor( private dialog: MatDialog ) { }

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

  openRepDialog() {
    const dialogRef = this.dialog.open( RepDialogComponent, {
      width: '250px',
      data: {}
    });
    
    dialogRef.afterClosed().subscribe( result => {
      alert(`User chose ${result}`);
    })
  }

}
