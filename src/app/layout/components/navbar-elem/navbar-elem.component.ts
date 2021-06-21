import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-elem',
  templateUrl: './navbar-elem.component.html',
  styleUrls: ['./navbar-elem.component.scss']
})
export class NavbarElemComponent implements OnInit {

  @Input()
  url!: string;

  @Input()
  exact: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
