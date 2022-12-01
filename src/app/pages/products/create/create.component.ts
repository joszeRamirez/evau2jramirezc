import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/domain/product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  title = "Crear producto"
  products: any;
  product: Product = new Product();

  constructor(private router: Router, private productService: ProductService) {

    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      this.product = new Product()
      this.product = params.product;

    }

  }

  ngOnInit(): void {
  }

  guardar() {
    console.log(this.product);
    this.products = this.productService.getProductsFire()

    if (this.product.uid!=null) {
      this.productService.editProductsFire(this.product)
    } else {
      this.productService.addProductsFire(this.product)
      this.product = new Product()
    }
    this.router.navigate(['products/list']);
  }
  goListProducts() {
    this.router.navigate(['products/list']);
  }
}
