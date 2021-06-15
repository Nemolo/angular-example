import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, filter, startWith } from 'rxjs/operators';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageNumber = new FormControl(1, [Validators.required, Validators.min(1), Validators.max(3)])

  listSize = new FormControl(1, [Validators.required, Validators.min(1), Validators.max(10)])

  posts!: any[]

  constructor(
    protected router: Router,
    protected testService: TestService
  ) { }

  ngOnInit(): void {
    this.listSize.valueChanges.pipe(
      startWith(1),
      filter(value => this.listSize.valid),
      debounceTime(500)
    ).subscribe(
      size => {
        this.testService.getPosts(size).subscribe(
          posts => this.posts = posts as any[]
        );
      }
    )
  }

  navigate(subpageNumber: number) {
    this.router.navigate(['page-with-subpages', 'sub-page-' + subpageNumber]);
  }

}
