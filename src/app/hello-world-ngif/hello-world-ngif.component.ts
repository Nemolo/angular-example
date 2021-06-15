import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world-ngif',
  templateUrl: './hello-world-ngif.component.html',
  styleUrls: ['./hello-world-ngif.component.scss']
})
export class HelloWorldNgifComponent {

  message = 'I\'m read only!';
  canEdit = false;
  list = [
    'one',
    'two',
    'etc'
  ]

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = 'I\'m read only!';
    }
  }
}
