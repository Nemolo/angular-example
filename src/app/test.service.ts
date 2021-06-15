import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

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
