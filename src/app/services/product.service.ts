import { Product } from './../domain/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsCollection: AngularFirestoreCollection<Product>;

  constructor(private afs: AngularFirestore) {
    this.productsCollection = afs.collection<Product>('products');
  }

  addProductsFire(product: Product) {
    const id = this.afs.createId();
    product.uid = id;

    this.productsCollection.doc(id).set(Object.assign({}, product));
  }

  editProductsFire(product: Product) {
    this.productsCollection.doc(product.uid).set(Object.assign({}, product));
  }

  deleteProductsFire(product: Product) {
    this.productsCollection.doc(product.uid).delete();
  }

  getProductsFire() {
    return this.productsCollection.valueChanges();
  }
}
