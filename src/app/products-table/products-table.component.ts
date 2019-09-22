import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductsTableDataSource, ProductsTableItem } from './products-table-datasource';
import { MatDialog } from '@angular/material';
import { NewProductComponent } from '../new-product/new-product.component';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})

export class ProductsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<ProductsTableItem>;
  dataSource: ProductsTableDataSource;

  displayedColumns = ['checked', 'code', 'description', 'weight', 'cubage', 'bulk','actions'];

  ngOnInit() {
    this.dataSource = new ProductsTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  constructor(public dialog: MatDialog) {}

  openDialogAdd(): void {
    const dialogRef = this.dialog.open(NewProductComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
