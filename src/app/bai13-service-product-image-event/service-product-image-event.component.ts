import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, ProductImage } from '../services/product.service';

@Component({
  selector: 'app-service-product-image-event',
  standalone: false,
  templateUrl: './service-product-image-event.component.html',
  styleUrl: './service-product-image-event.component.css',
})
export class ServiceProductImageEventComponent {
  public products: ProductImage[] = [];

  constructor(pservice: ProductService, private router: Router) {
    this.products = pservice.getProductsWithImages();
  }

  viewDetail(p: ProductImage) {
    this.router.navigate(['service-product-image-event', p.ProductId]);
  }
}
