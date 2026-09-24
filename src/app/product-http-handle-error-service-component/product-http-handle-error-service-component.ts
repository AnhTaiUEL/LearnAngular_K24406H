import { Component, OnInit } from '@angular/core';
import { ProductHttpHandleErrorService } from '../services/product-http-handle-error.service';
import { Product } from '../classes/IProduct';

@Component({
  selector: 'app-product-http-handle-error-service-component',
  standalone: false,
  templateUrl: './product-http-handle-error-service-component.html',
  styleUrl: './product-http-handle-error-service-component.css',
})
export class ProductHttpHandleErrorServiceComponent implements OnInit {
  public products: Product[] = [];
  public errorMessage: string = '';

  constructor(private service: ProductHttpHandleErrorService) {}

  ngOnInit(): void {
    this.service.getProductsHandleError().subscribe({
      next: (data) => {
        this.products = data;
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.products = [];
      },
    });
  }

  public trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}
