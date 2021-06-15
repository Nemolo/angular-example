import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detailID!: string;
  post!: any;

  constructor(
    protected jhonny: ActivatedRoute,
    protected http: HttpClient
  ) { }

  ngOnInit(): void {
    this.detailID = this.jhonny.snapshot.params.detailID;
    this.http.get('https://www.musical.it/wp-json/wp/v2/posts/' + this.detailID).subscribe(
      post => this.post = post
    )
  }

}
