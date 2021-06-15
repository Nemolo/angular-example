import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageNumber = new FormControl(1, [Validators.required, Validators.min(1), Validators.max(3)])

  constructor(
    protected router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigate(subpageNumber: number) {
    this.router.navigate(['page-with-subpages', 'sub-page-' + subpageNumber]);
  }

}
