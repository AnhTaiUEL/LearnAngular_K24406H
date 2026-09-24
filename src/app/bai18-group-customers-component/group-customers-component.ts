import { Component, OnInit } from '@angular/core';
import { CustomerGroup, CustomerGroupService } from '../services/customer-group.service';

@Component({
  selector: 'app-group-customers-component',
  standalone: false,
  templateUrl: './group-customers-component.html',
  styleUrl: './group-customers-component.css',
})
export class GroupCustomersComponent implements OnInit {
  public customerGroups: CustomerGroup[] = [
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
  public errorMessage: string = '';

  constructor(private customerGroupService: CustomerGroupService) {}

  ngOnInit(): void {
    this.customerGroupService.getCustomerGroups().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.customerGroups = data;
        }
      },
      error: (err) => {
        console.error('Lỗi khi tải dữ liệu khách hàng:', err);
      },
    });
  }
}
