import { Component, OnInit, signal } from '@angular/core';
import { ProductHttpService } from '../services/product-http.service';
import { Product } from '../classes/IProduct';

@Component({
  selector: 'app-product-list-call-http-service-component',
  standalone: false,
  templateUrl: './product-list-call-http-service-component.html',
  styleUrl: './product-list-call-http-service-component.css',
})
export class ProductListCallHttpServiceComponent implements OnInit {
  // Sử dụng Signal quản lý dữ liệu theo slide 31
  public products = signal<Product[]>([]);

  constructor(private productHttpService: ProductHttpService) {}

  ngOnInit(): void {
    this.productHttpService.getProducts().subscribe((data) => {
      this.products.set(data);
    });
  }
}
