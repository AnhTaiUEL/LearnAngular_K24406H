import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  parentData: string = 'Sample Text';
  receivedChildData: any = null;

  handleChildData(data: any) {
    this.receivedChildData = data;
  }
}
