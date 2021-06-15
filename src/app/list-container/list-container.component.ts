import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {

  list: any = [];

  doubleLocal!: string;

  constructor(
    protected testService: TestService
  ) { }

  ngOnInit(): void {
    this.list = this.testService.grabMockList();
  }

  what($event: any) {
    console.log($event);
  }

  randomize() {
    this.doubleLocal = Math.random().toFixed(20);
  }
}
