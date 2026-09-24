import { Injectable } from '@angular/core';

export interface ProductInCatalog {
  ProductId: string;
  ProductName: string;
  Price: number;
  Image: string;
}

export interface Catalog {
  Cateid: string;
  CateName: string;
  Products: ProductInCatalog[];
}

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  datas: Catalog[] = [
    {
      Cateid: 'cate1',
      CateName: 'nước ngọt',
      Products: [
        {
          ProductId: 'p1',
          ProductName: 'Coca',
          Price: 100,
          Image: 'assets/h1.png',
        },
        {
          ProductId: 'p2',
          ProductName: 'Pepsi',
          Price: 300,
          Image: 'assets/h2.png',
        },
        {
          ProductId: 'p3',
          ProductName: 'Sting',
          Price: 200,
          Image: 'assets/h3.png',
        },
      ],
    },
    {
      Cateid: 'cate2',
      CateName: 'Bia',
      Products: [
        {
          ProductId: 'p4',
          ProductName: 'Heineken',
          Price: 500,
          Image: 'assets/h4.png',
        },
        {
          ProductId: 'p5',
          ProductName: '333',
          Price: 400,
          Image: 'assets/h5.png',
        },
        {
          ProductId: 'p6',
          ProductName: 'Sài Gòn',
          Price: 600,
          Image: 'assets/h6.png',
        },
      ],
    },
  ];

  constructor() {}

  getCategories(): Catalog[] {
    return this.datas;
  }
}
