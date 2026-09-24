import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event-component',
  standalone: false,
  styleUrl: './binding-event-component.css',
  templateUrl: './binding-event-component.html',
})
export class BindingEventComponent {
  public hsa: any;
  public hsb: any;
  public result: string = '';

  public giaiPto1(a: string, b: string) {
    this.hsa = parseFloat(a);
    this.hsb = parseFloat(b);

    if (this.hsa == 0 && this.hsb == 0) {
      this.result = 'Tùm Lum Nghiệm';
    } else if (this.hsa == 0 && this.hsb != 0) {
      this.result = "<font color='red'>Vô nghiệm</font>";
    } else {
      let x = -this.hsb / this.hsa;
      this.result = 'Nghiệm x=' + x;
    }
  }
}
