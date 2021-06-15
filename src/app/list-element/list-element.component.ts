import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent {

  @Input()
  id = 0;

  @Input()
  name = 'zero';

  @Output()
  something = new EventEmitter()

  constructor() { }

  hasBeenClicked(id: number) {
    this.something.emit(id);
  }

}
