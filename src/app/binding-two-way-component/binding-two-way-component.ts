import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-two-way-component',
  standalone: false,
  styleUrl: './binding-two-way-component.css',
  templateUrl: './binding-two-way-component.html',
})
export class BindingTwoWayComponent {
  public a: any;
  public b: any;
  public c: any;
  public result: string = '';

  public giai() {
    const a = parseFloat(this.a);
    const b = parseFloat(this.b);
    const c = parseFloat(this.c);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      this.result = '<font color="red">Vui lòng nhập đủ các hệ số a, b, c!</font>';
      return;
    }

    if (a === 0) {
      if (b === 0) {
        if (c === 0) {
          this.result = 'Phương trình có vô số nghiệm';
        } else {
          this.result = '<font color="red">Phương trình vô nghiệm</font>';
        }
      } else {
        const x = -c / b;
        this.result = 'Phương trình bậc 1 có nghiệm x = ' + x;
      }
    } else {
      const delta = b * b - 4 * a * c;
      if (delta < 0) {
        this.result = '<font color="red">Phương trình vô nghiệm</font>';
      } else if (delta === 0) {
        const x = -b / (2 * a);
        this.result = 'Phương trình có nghiệm kép x1 = x2 = ' + x;
      } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        this.result = `x1 = ${x1}<br>x2 = ${x2}`;
      }
    }
  }

  public ptMoi() {
    this.a = null;
    this.b = null;
    this.c = null;
    this.result = '';
  }
}
