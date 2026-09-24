import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

export interface Customer {
  Id: string;
  Name: string;
  Email: string;
  Age: number;
  Image: string;
}

export interface CustomerGroup {
  CustomerTypeId: number;
  CustomterTypeName: string;
  Customers: Customer[];
}

@Injectable({
  providedIn: 'root',
})
export class CustomerGroupService {
  private jsonUrl = 'assets/data/customers.json';

  private fallbackGroups: CustomerGroup[] = [
    {
      CustomerTypeId: 1,
      CustomterTypeName: 'VIP',
      Customers: [
        {
          Id: 'Cus123',
          Name: 'Obama',
          Email: 'obama@gmail.com',
          Age: 67,
          Image: 'assets/avatars/obama-avatar.png',
        },
        {
          Id: 'Cus456',
          Name: 'Kim jong Un',
          Email: 'unun@gmail.com',
          Age: 38,
          Image: 'assets/avatars/unun-avatar.png',
        },
        {
          Id: 'Cus789',
          Name: 'Putin',
          Email: 'putin@gmail.com',
          Age: 77,
          Image: 'assets/avatars/putin-avatar.png',
        },
      ],
    },
    {
      CustomerTypeId: 2,
      CustomterTypeName: 'Normal',
      Customers: [
        {
          Id: 'Cus000',
          Name: 'Hồ Cẩm Đào',
          Email: 'hodao@gmail.com',
          Age: 16,
          Image: 'assets/avatars/hodao-avatar.png',
        },
        {
          Id: 'Cus111',
          Name: 'Tap Can Binh',
          Email: 'binhbinh@gmail.com',
          Age: 67,
          Image: 'assets/avatars/binhbinh-avatar.png',
        },
      ],
    },
  ];

  constructor(private http: HttpClient) {}

  getCustomerGroups(): Observable<CustomerGroup[]> {
    return this.http.get<CustomerGroup[]>(this.jsonUrl).pipe(
      catchError(() => this.http.get<CustomerGroup[]>('datasets/customers.json')),
      catchError(() => of(this.fallbackGroups))
    );
  }
}
