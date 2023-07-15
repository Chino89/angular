import { Component } from '@angular/core';
import stock from '../assets/data/stock.json';
import { Producto } from './interfaces/producto';
    
    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent {
      title = 'Emma Vivas - Cluster 1';

        stock: Producto[] = stock;
    }
    