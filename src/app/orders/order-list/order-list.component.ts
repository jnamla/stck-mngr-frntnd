import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';

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
  orderNumber: 106,
  total: 29.90,
  description: '2 lbs of tuna.',
  isChecked: true
},
{
 orderDate: new Date(),
 orderNumber: 108,
 total: 66.90,
 description: '5 lbs of rice.',
 isChecked: false
},
{
 orderDate: new Date(),
 orderNumber: 110,
 total: 129.90,
 description: '2 lbs of salmon.',
 isChecked: true
},
{
  orderDate: new Date(),
  orderNumber: 112,
  total: 29.90,
  description: '2 lbs of tuna.',
  isChecked: true
},
{
 orderDate: new Date(),
 orderNumber: 114,
 total: 66.90,
 description: '5 lbs of rice.',
 isChecked: false
},
{
 orderDate: new Date(),
 orderNumber: 116,
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
  pageSize = 10;
  length = ELEMENT_DATA.length;
  pageIndex = 0;
  pageSizeOptns = [ 1, 2, 5, 10];

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  pageEvent: PageEvent;

  constructor() { }

  loadData( pageIndex: number, pageSize: number ) {
    this.dataSource = 
    new MatTableDataSource(ELEMENT_DATA.slice(pageIndex, pageIndex + pageSize));
  }

  ngOnInit() {
    this.loadData(0, this.pageSize);
    this.dataSource.sort = this.sort;
  }

  selectAll(): void {
    for(var elem of ELEMENT_DATA){
      elem.isChecked = !elem.isChecked;
    }
  }

  onPageChange( event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.length = Math.floor( ELEMENT_DATA.length / event.pageSize ) + 1;
    this.loadData(this.pageIndex, this.pageSize);
  }

}
