import { Component } from '@angular/core';
import { Product } from '../classes/IProduct';

@Component({
  selector: 'app-product-list-component',
  standalone: false,
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {
  // Array of Product objects
  products: Product[] = [
    { id: 1, name: 'Iphone 16', price: 999, image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/i/p/iphone-13_2_2.jpg?_gl=1*1547g4o*_gcl_au*NTk0Mjc1NzAwLjE3ODk3MTA5NjA.*_ga*NjQxOTgzMTk3LjE3ODExNjMzMDI.*_ga_QLK8WFHNK9*czE3ODk3MTA5NjAkbzIkZzAkdDE3ODk3MTA5NjEkajU5JGwwJGg5MjM5OTUxNDk.' },
    { id: 2, name: 'Samsung Galaxy', price: 699, image: 'https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/370544/samsung-galaxy-s26-fe-blue-1-639235196564404020.jpg' },
    { id: 3, name: 'Tablet', price: 399, image: 'https://tse3.mm.bing.net/th/id/OIP.mFat11CLMHsI3JGTU_RsNQHaE2?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 4, name: 'Smartwatch', price: 199, image: 'https://tse3.mm.bing.net/th/id/OIP.qqzdzvczCPxR2OAsaix59wHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 5, name: 'Headphones', price: 149, image: 'https://tse4.mm.bing.net/th/id/OIP.nE_uoT22bff3E1QQdXdeTgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
  ];

  // Performance optimization function for ngFor
  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}