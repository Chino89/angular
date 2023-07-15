import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  @Input() stock: Producto[] = [];
  tableData: Producto[] = [];
  showTable= true;

  ngOnInit() {
    this.tableData = this.stock;
  }

  action() {
    this.showTable = !this.showTable
  }

  deleteItem(item:Producto) {
    this.tableData = this.tableData.filter(producto => producto.nombre !== item.nombre)
  }

  addProducts() {
    this.tableData = this.stock;
  }

  displayedColumns: string[] = ['nombre', 'costos', 'accion'];
}
