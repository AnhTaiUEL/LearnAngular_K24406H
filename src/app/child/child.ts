import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() messageFromParent: string = '';
  @Output() messageToParent = new EventEmitter<any>();

  sendToParent() {
    this.messageToParent.emit({
      name: 'Heniken',
      price: 19000,
      company: 'Heineken',
    });
  }
}
