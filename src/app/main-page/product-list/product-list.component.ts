import { Component } from '@angular/core';
import {Product, products} from "../../products";
import {ProductServiceService} from "../../product-service.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products]

  constructor(private service: ProductServiceService) {
  }

  productList: Product[]=[];

  ngOnInit(): void {
    this.refreshProductList();
    console.log(this.productList)
  }

  refreshProductList() {
    this.service.getProductList().subscribe((data) => {
      this.productList = data;
    })
  }
}
