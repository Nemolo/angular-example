import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss']
})
export class MyFirstComponentComponent {
  fontColor = 'blue';
  h1ID = Math.random();
  canClick = false;
  message = 'Hello, World';
  count = 0;

  constructor(
    protected testService: TestService,
    protected router: Router
  ) { }


  sayMessage() {
    this.testService.writeCount(++this.count);
  }
}
