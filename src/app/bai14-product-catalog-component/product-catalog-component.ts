import { Component, OnInit } from '@angular/core';
import { Catalog, CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-product-catalog-component',
  standalone: false,
  templateUrl: './product-catalog-component.html',
  styleUrl: './product-catalog-component.css',
})
export class ProductCatalogComponent implements OnInit {
  public categories: Catalog[] = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.categories = this.catalogService.getCategories();
  }
}
