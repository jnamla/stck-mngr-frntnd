import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { EMLINK } from 'constants';

const ELEMENT_DATA = [
 {
   orderDate: new Date(),
   orderNumber: 100,
   total: 29.90,
   description: '2 lbs of tuna.',
   isChecked: true
 },
 {
  orderDate: new Date(),
  orderNumber: 102,
  total: 66.90,
  description: '5 lbs of rice.',
  isChecked: false
},
{
  orderDate: new Date(),
  orderNumber: 105,
  total: 129.90,
  description: '2 lbs of salmon.',
  isChecked: true
},
{
  orderDate: new Date(),
  orderNumber: 100,
  total: 29.90,
  description: '2 lbs of tuna.',
  isChecked: true
},
{
 orderDate: new Date(),
 orderNumber: 102,
 total: 66.90,
 description: '5 lbs of rice.',
 isChecked: false
},
{
 orderDate: new Date(),
 orderNumber: 105,
 total: 129.90,
 description: '2 lbs of salmon.',
 isChecked: true
},
{
  orderDate: new Date(),
  orderNumber: 100,
  total: 29.90,
  description: '2 lbs of tuna.',
  isChecked: true
},
{
 orderDate: new Date(),
 orderNumber: 102,
 total: 66.90,
 description: '5 lbs of rice.',
 isChecked: false
},
{
 orderDate: new Date(),
 orderNumber: 105,
 total: 129.90,
 description: '2 lbs of salmon.',
 isChecked: true
}];

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})

export class OrderListComponent implements OnInit {

  displayedColumns: string[] = ['action', 'orderNumber', 'orderDate', 'description', 'total'];
  dataSource = new MatTableDataSource( ELEMENT_DATA );

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  selectAll(): void {
    for(var elem of ELEMENT_DATA){
      elem.isChecked = !elem.isChecked;
    }
  }

}
