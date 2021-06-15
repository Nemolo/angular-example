import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    protected http: HttpClient
  ) { }

  getPosts(limit: number = 10): Observable<any[]> {
    return this.http.get<any[]>('https://www.musical.it/wp-json/wp/v2/posts', {
      params: {
        status: "publish",
        type: "post",
        per_page: limit.toFixed(),
        after: "2019-03-11T00:00:00Z",
        categories_exclude: "9"
      }
    })
  }

  writeCount(count: number) {
    console.warn(count);
  }

  grabListOfUser() {

  }

  grabMockList() {
    return [{
      id: 1,
      name: 'one'
    },
    {
      id: 2,
      name: 'two'
    },
    {
      id: 3,
      name: 'three'
    }]
  }
}
