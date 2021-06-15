import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-double-way',
  templateUrl: './double-way.component.html',
  styleUrls: ['./double-way.component.scss']
})
export class DoubleWayComponent implements OnInit {

  @Input()
  double!: string;
  @Output()
  doubleChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  randomize() {
    this.double = Math.random().toFixed(20);
    this.doubleChange.emit(this.double);
  }
}
