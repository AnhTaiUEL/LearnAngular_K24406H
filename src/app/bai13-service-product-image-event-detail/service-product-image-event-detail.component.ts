import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, ProductImage } from '../services/product.service';

@Component({
  selector: 'app-service-product-image-event-detail',
  standalone: false,
  templateUrl: './service-product-image-event-detail.component.html',
  styleUrl: './service-product-image-event-detail.component.css',
})
export class ServiceProductImageEventDetailComponent {
  public selectedProduct: ProductImage | undefined;

  constructor(
    private activateRoute: ActivatedRoute,
    private _fs: ProductService,
    private router: Router
  ) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.selectedProduct = this._fs.getProductDetail(id);
      }
    });
  }

  goBack() {
    this.router.navigate(['service-product-image-event']);
  }
}
