import { ProductService } from './../../../services/product.service';
import { Product } from './../../../domain/product';
import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  title = "Listado de Productos";

  products: any;

  constructor(private router: Router, private productService: ProductService) {

  }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts() {
    this.products = this.productService.getProductsFire();
    console.log(this.products)
  }
  goNewProduct() {
    this.router.navigate(['products/create']);
  }

  editProduct(product: Product) {
    console.log("Editar productos " + product)
    let params: NavigationExtras = {
      queryParams: {
        product: product
      }
    }
    this.router.navigate(['products/create'], params);
  }

  deleteProduct(product: Product) {
    console.log("Eliminar productos " + product)
    this.productService.deleteProductsFire(product)
    this.loadProducts()
  }

}
