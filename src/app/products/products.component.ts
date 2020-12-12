import { Component, OnInit } from '@angular/core';
import products from "../mocks/products";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  ourProduct = products;
  
  constructor() { }

  ngOnInit() {
  }

}
