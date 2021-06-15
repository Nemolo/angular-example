import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    protected router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigate(subpageNumber: number) {
    this.router.navigate(['page-with-subpages', 'sub-page-' + subpageNumber], {
      queryParams: {
        page: 1,
      },
      fragment: "one"
    });
  }

}
