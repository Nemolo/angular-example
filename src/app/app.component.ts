import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showTitle = false;
  list = [ 'element1' // .....
  ]
  title = 'This is my first application';
  h1ID = 'my-id'
  color = '#444'
}
